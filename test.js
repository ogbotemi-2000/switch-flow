let config = require('./config.json'),
    { OpenFeature } = require('@openfeature/server-sdk'),
    { initializeDevCycle } = require('@devcycle/nodejs-server-sdk'),
    { DEVCYCLE_SERVER_SDK_KEY } = config;

const user = { user_id: 'my_user' }
const SERVICE_USER = { user_id: 'api-service' }
const devcycleOptions = { logLevel: 'debug' }
// Initialize the DevCycle SDK
const devcycleClient    = initializeDevCycle(DEVCYCLE_SERVER_SDK_KEY, user, devcycleOptions);

!async function() {
    // wait for client to initialize
    await devcycleClient.onClientInitialized()

    const provider = await devcycleClient.getOpenFeatureProvider();
    // Set the provider for OpenFeature from the DevCycleClient

    await OpenFeature.setProviderAndWait()//provider)
    // Create the OpenFeature client
    let openFeatureClient = OpenFeature.getClient() 
    
    // Set the context for the OpenFeature client, you can use 'targetingKey' or 'user_id'
    const context = { targetingKey: 'node_sdk_test' }
    
    // Retrieve a boolean flag from the OpenFeature client
    const boolFlag = await openFeatureClient.getBooleanValue('example-text', [false], context)
    // console.log('::ALL::', /*devcycleClient.allFeatures(SERVICE_USER),*/ devcycleClient.allVariables(SERVICE_USER))
    logVariation()
}()
/**
 * Log togglebot to the console overwriting the previous frame
 */
function logVariation() {
    // const devcycleClient = getDevCycleClient()

    let idx = 0
    const renderFrame = () => {
      const features = devcycleClient.allFeatures(SERVICE_USER)
      const { variationName = 'Default' } = features['hello-togglebot'] ?? {}

      const wink = devcycleClient.variableValue(SERVICE_USER, 'togglebot-wink', false)
      const speed = devcycleClient.variableValue(SERVICE_USER, 'togglebot-speed', 'off')

      const spinChars = speed === 'slow' ? "◟◜◝◞" : "◜◠◝◞◡◟"
      const spinner = speed === 'off' ? '○' : spinChars[idx % spinChars.length]
      idx = (idx + 1) % spinChars.length

      const face = wink ? '(○ ‿ ○)' : '(- ‿ ○)'

      const frame = `${spinner} Serving variation: ${variationName} ${face}`
      const color = speed === 'surprise' ? 'rainbow' : 'blue'

      writeToConsole(frame, color)

      const timeout = ['fast', 'surprise', 'off-axis'].includes(speed) ? 100 : 500
      setTimeout(renderFrame, timeout)
    }
    setTimeout(() => {
      process.stdout.write('\n')
      renderFrame()
    }, 500)
}

const COLORS = {
  red: '\x1b[91m',
  green: '\x1b[92m',
  yellow: '\x1b[93m',
  blue: '\x1b[94m',
  magenta: '\x1b[95m',
}
const END_CHAR = '\x1b[0m'

/**
 * Use chalk to apply the given color to the text
 */
const addColor = (text, color) => {
  const colors = {
    ...COLORS,
    rainbow: Object.values(COLORS)[Date.now() % 5]
  }

  return colors[color]
    ? colors[color] + text + END_CHAR
    : text
}

/**
 * Write the text to stdout, with the given colour
 */
const writeToConsole = (text, color = 'blue') => {
  text = addColor(text, color)

  process.stdout.write('\x1b[K  ' + text + '\r')
}

module.exports = {
  logVariation
}