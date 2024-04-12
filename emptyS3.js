// Empties pre-set object (the one belonging to the set bucket, having the set prename)

const { S3Client, PutObjectCommand, DeleteObjectCommand} = require("@aws-sdk/client-s3");

const REGION = "us-west-2";



// Established pre-made bucket
var bucketName = "sdk-bucket-2-21-2024";
// Defines the keyname of the object to be deleted
var keyname = "sampleTHINGS";

const s3client = new S3Client({region: 'us-west-2'});

var deleteParams = 
{
    Bucket: bucketName,
    Key: keyname,
}

const data = s3client.send(new DeleteObjectCommand(deleteParams));