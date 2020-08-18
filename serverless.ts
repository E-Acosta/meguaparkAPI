import { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
  service: {
    name: 'meguabackendserverless',
  },
  org: "everacosta",
  app: 'meguaparkapi',
  frameworkVersion: '>=1.72.0',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack','serverless-offline','serverless-dotenv-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      binaryMediaTypes:['image/png','image/jpeg','image/jpg']
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    role:'arn:aws:iam::902923430347:role/meguaparkbackend'
  },
  functions: {
    hello: {
      handler: 'handler.hello',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          },
        },
        {
          http: {
            method: 'ANY',
            path: '{proxy+}',
          },
        }
      ]
    }
  }
}

module.exports = serverlessConfiguration;
