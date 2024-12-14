// lambda function to create a practice entry 
import { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';
import { Practice, CreatePracticeRequest } from '../../types/practice';

const dynamoDB = DynamoDBDocument.from(new DynamoDB());

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    // Parse request body    
    const requestBody: CreatePracticeRequest = JSON.parse(event.body || '{}'); 
    const timestamp = new Date().toISOString();

    // TODO: Later this will come from auth token
    const userId = 'test123'; // Temporary hardcoded value 
 
    // Create a practice object
    const practice: Practice = {
      userId,
      practiceId: uuidv4(),
      date: requestBody.date,
      practiceGoal: requestBody.practiceGoal,
      clubsUsed: requestBody.clubsUsed, 
      ballsHit: requestBody.ballsHit,
      notes: requestBody.notes || '',
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