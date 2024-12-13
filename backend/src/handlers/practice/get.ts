// lambda function to get all practices for the user  
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamoDB = DynamoDBDocument.from(new DynamoDB);

export const handler: APIGatewayProxyHandler = async (event) => {
  
  try {    
    // TODO: update to get userId from auth 
    const userId = 'test123' // test
    
    // Set allowedOrigin based on stage 
    const allowedOrigin = process.env.STAGE === 'dev' 
    ? '*' 
    : 'https://mochigolf.com';

    // return error if userId is not passed 
    if (!userId) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': allowedOrigin
        },
        body: JSON.stringify({ 
          message: 'userId is required' 
        })
      };
    }

    // Query dynamoDB 
    const result = await dynamoDB.query({
      TableName: process.env.PRACTICE_TABLE!, 
      KeyConditionExpression: 'userId = :userId',
      ExpressionAttributeValues: {
        ':userId': userId
      }
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': allowedOrigin
      },
      body: JSON.stringify({
        message: 'Practices retrieved successfully',
        practices: result.Items
      })
    }

  } catch (error) {
    console.error('Error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Could not retrieve practice records',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}