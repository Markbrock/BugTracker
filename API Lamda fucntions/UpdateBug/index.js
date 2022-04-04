
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


async function getItem(event){
    const params = {TableName: 'Bug_Table',
                  Key: {
                  'BugID': event.BugID,
                  'Date': event.Date }}
  try {
    const data = await docClient.get(params).promise()
    return data
  } catch (err) {
    return err
  }
}

function UpdateAttribute(event){
    const tableName = 'Bug_Table';
    console.log(event.Attribute)
    docClient.update({
    TableName: tableName,
    Key: {
      'BugID': event.BugID,
      'Date': event.Date
    },
    UpdateExpression: `set #Attribute  = :Priority`,
    ExpressionAttributeNames: {
        "#Attribute": event.Attribute
        },
    ExpressionAttributeValues: {
      ":Priority": event.AttributeValue
    },
  })
  .promise()
  .then(data => console.log(data.Attributes))
  .catch(console.error)
    }


exports.handler = async (event, context) => {
    
        docClient.update({
    TableName: "Bug_Table",
    Key: {
      'BugID': event.BugID,
      'Date': event.Date
    },
    UpdateExpression: "set BugType = :BugType,Priority = :Priority,Description = :Description,BugStatus = :BugStatus",
    ExpressionAttributeValues: {
     
        ":BugType": event.Type,
        ":Priority": event.Priority,
        ":Description":event.Description,
        ":BugStatus": event.Status

    },
  })
  .promise()
  .then(data => console.log(data.Attributes))
  .catch(console.error)
  try {
    const data = await getItem(event)
    console.log(data.Item.log)
    const tableName = 'Bug_Table';
    let log = data.Item.log
    

    console.log(log)
    return { body: JSON.stringify(data) }
  }catch (err) { 
    return { error: err }
  }
}

// const AWS = require('aws-sdk');
// const docClient = new AWS.DynamoDB.DocumentClient();
// const tableName = 'Bug_Table';
// const params = { TableName: tableName,
//                   Key: {
//                   'BugID': event.BugID,
//                   'Date': event.Date
//                       }}

// async function getItem(){
//   try {
//     const data = await docClient.get(params).promise()
//     return data
//   } catch (err) {
//     return err
//   }
// }

// exports.handler = async (event, context) => {
//   try {
//     const data = await getItem()
//     return { body: JSON.stringify(data) }
//   } catch (err) {
//     return { error: err }
//   }
// }


// const tableName = 'Bug_Table';

// exports.handler = function(event, context) {
  
// let params = { TableName: tableName,
//                   Key: {
//                   'BugID': event.BugID,
//                   'Date': event.Date
//                       }}
// var response
// docClient.get(params, function(err, data) {if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//     log = data.Item.log;
//   }
// });

