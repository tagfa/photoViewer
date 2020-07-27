
// bucket名を定義
var albumBucketName = 'photos-tagfa';


//AWSのリージョン、CognitoのプールIDクレデンシャルを定義
AWS.config.region = 'ap-northeast-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:33ce524f-7a32-419d-b90f-68abdf4f858e',
});

// S3オブジェクトを生成
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});
//
// Functions
//

// 写真を表示するfunction
function viewAlbum(albumName) {
  var albumPhotosKey = encodeURIComponent(albumName) + '/';
  s3.listObjects({Prefix: albumPhotosKey}, function(err, data) {
    if (err) {
      return alert('There was an error viewing your album: ' + err.message);
    }

    // S3のURL生成
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + '/';

    var photos = data.Contents.map(function(photo) {
      var photoKey = photo.Key;
      var photoUrl = bucketUrl + encodeURIComponent(photoKey);

      var img = document.createElement('img');
      img.setAttribute('src',photoUrl);

      var caption = document.createElement('div');
      caption.className = 'inner';
      caption.innerHTML = '<p><span>'+ photo.Key + '</span></p>';

      var div = document.createElement('div');
      div.className='photo';
      div.appendChild(img);
      div.appendChild(caption);

      document.getElementById('viewer').appendChild(div);
    });
  });
}
