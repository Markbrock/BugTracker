var AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" })
exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, '  '));
    var tableName = "Bug_Table";
    var datetime = new Date().getTime().toString();
    var BugID = AWS.util.uuid.v4().toString()
    
        dynamoDB
          .put({
            Item: {
             BugID: BugID ,
             Date: datetime ,
             User:  event.User,
             BugType:  event.Type ,
             Priority:  event.Priority ,
             Description: event.Description,
             BugStatus: event.Status,
             log: ["created by " +  event.User]
            },
            TableName: "Bug_Table",
          })
          .promise()
          .then(data => console.log(data.Attributes))
          .catch(console.error)
};

