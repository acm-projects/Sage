const { S3Client, PutObjectCommand, DeleteObjectCommand} = require("@aws-sdk/client-s3");

const REGION = "us-west-2";



// Established pre-made bucket
var bucketName = "sdk-bucket-2-21-2024";
// Make a name for an object to be uploaded
var keyname = "sampleTHINGS";

const s3client = new S3Client({region: 'us-west-2'});

var putParams = 
{
    Bucket: bucketName,
    Key: keyname,
    Body: "This is a test!",
};

const data = s3client.send(new PutObjectCommand(putParams));