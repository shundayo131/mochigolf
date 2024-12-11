// lambda function to create a practice entry 
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4} from 'uuid';

const dynamoDB = DynamoDBDocument.from(new DynamoDB());

export const handler: APIGatewayProxyHandler = async (event) => {
  try {    
    // Check event for debug purpose 
    console.log('Received event:', JSON.stringify(event));


    // Parse request body and get timestamp 
    const body = JSON.parse(event.body || '{}'); 
    const timestamp = new Date().toISOString();

    // dummy record data - [TODO] update values 
    const practice = {
      userId: '123',
      practiceId: uuidv4(),
      date: '2024-12-10T15:45:00Z',
      practiceGoal: 'perfect putt',
      clubsUsed: ["7-Iron", "Putter", "Driver"],
      ballsHit: 100,
      notes: 'I did well today',
      createdAt: timestamp,
      updatedAt: timestamp
    };

    // Save to DynamoDB 
    await dynamoDB.put({
      TableName: process.env.PRACTICE_TABLE!,
      Item: practice
    });

    // Set allowedOrigin based on stage 
    const allowedOrigin = process.env.STAGE === 'dev' 
      ? '*' 
      : 'https://mochigolf.com';

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': allowedOrigin  // CORS header
      },
      body: JSON.stringify({
        message: 'Practice record created successfully',
        practice
      })
    }
  } catch (error) {
    console.error('Error: ', error);

    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Could not create practice record',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
}