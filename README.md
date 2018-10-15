#react-native firebaseサンプル
<br/>
###やりたいこと  
・FirebaseのRealtimeDatabaseにどのように追加されていくのか知りたい(RDBとの違いの吸収)  
※react-nativeでのfirebaseの書き方の練習ではない

###つくるもの  
・追加だけのtodoみたいなやつ

###前提  
・firebaseに登録して、RealtimeDatabaseを使ってみようと思ってプロジェクトを作ったが設計の仕方がわからない。RDBは使ったことある。


ソース：[firebase-sample](https://github.com/shoichi1023/firebase-sample)  

上のソースでは足りないので、firebaseフォルダの中に下記を追加

```config.js
export default {
    API_KEY: "",
    AUTH_DOMAIN: "",
    DATABASE_URL: "",
    STORAGE_BUCKET: "",
}
```

###結果どうだったか  
まず、RDBと違うところ、当たり前だが私はわからなかった。
<br />
**テーブルとか事前に作らなくていい**
<br />
え？うそでしょって思った  
DBって先に場所作って、その場所を指定して入れていくものじゃないの？？って  
違った。

Firebase RealtimeDatabaseって、jsonファイルみたいなもので、空のjsonに、keyを指定して値を入れていく感覚。  
もっとかみ砕いていえば、  

```example.js
var array = [];
array['key'] = value;
```

みたいな感覚。

特徴的な部分は  
groupと呼ばれるもの(下記で言うt_userのところ)があって、そこにデータが入れられていくこと。  
RDBと照らし合わせながら考えてみたいと思う。  
<br />
##RDB
![image.png](https://qiita-image-store.s3.amazonaws.com/0/260113/6ccb7b71-dad5-c2f8-e6ff-09be769a467c.png)

こうだとすると

##RealtimeDatabase
![image.png](https://qiita-image-store.s3.amazonaws.com/0/260113/26b244e6-13d2-3f49-a9f9-701954ce81da.png)

こんなイメージ

##RDB

```hogehoge.sql
select id, name, age from t_user;
```

だとすると

##RealtimeDatabase

```hogehoge.js
import firebase from './firebase/firebase';

const db = firebase.database();
const t_user = db.ref('t_user');


/********constructor内**********/

t_user.on('value',snapshot=>{
 this.state.rs.push({
  'id': snapshot.val('id'),
  'name': snapshot.val('name'),
  'age': snapshot.val('age')
 });
});

/**********************/

```

こんな感じのイメージ  
詳しくはここに載ってる  
[firebase データの取得](https://firebase.google.com/docs/database/admin/retrieve-data?hl=ja#value)

リレーションの仕方とかは上のことを理解したうえでこの人の記事を読むとわかりやすかった。

[Firebase Realtime DBを実践投入するにあたって考えたこと](https://qiita.com/1amageek/items/64bf85ec2cf1613cf507)
<br />
設計の仕方とか内部処理の仕組みとかをもう少し学んでいきたい。
<br>
