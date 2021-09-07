// パッケージをそれぞれfunctionsとadminにimport
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// initializeApp()で初期化
admin.initializeApp();
// admin権限でfirestoreを操作できるように定数dbに入れておく
const db = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body:any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body)
});
}

export const addDataset = functions.https.onRequest(async (req: any, res: any) => {
  if (req.method !== 'POST') {
      sendResponse(res, 405, {error: "Invalid Request"})
  } else {
      const dataset = req.body;
      for (const key of Object.keys(dataset)) {
          const data = dataset[key];
          await db.collection('questions').doc(key).set(data)
      }
      sendResponse(res, 200, {message: 'データの保存が完了しました。'});
  }
});