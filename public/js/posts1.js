
var firebaseConfig = {
    apiKey: "AIzaSyDgEYdaGVAoBFs4kgA4Wj2tOCStlKW2fqk",
    authDomain: "deepcodingdotin.firebaseapp.com",
    databaseURL: "https://deepcodingdotin-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "deepcodingdotin",
    storageBucket: "deepcodingdotin.appspot.com",
    messagingSenderId: "726999565321",
    appId: "1:726999565321:web:154321a13b381e06e0a4d8",
    measurementId: "G-QM7Z8N1M9Z"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var ref = firebase.database().ref('posts').limitToLast(8);

var con1 = document.getElementById('body2');
//var con2 = document.getElementsByClassName('img')
//var con_title = document.getElementsByClassName('scontain-title')

function PostsData(title,content,id){
    var x = document.createElement('div');
    x.className = 'scontain';
    
    var a = document.createElement('div');
    a.className = 'img';
    a.innerHTML = content;
    var b = document.createElement('div')
    b.id = 'scontain-title';
    var c = document.createElement('h3')
    c.innerText = title
    var r = document.createElement('a')
    r.type = 'button';
    r.href = "/postid/"+title+"/"+id;
    r.target = "_blank";
    r.id = "bsub";
    r.innerText = "ReadMore"

    b.appendChild(c)
    b.appendChild(r)
    x.appendChild(a)
    x.appendChild(b)
    con1.appendChild(x)
    
    
}

ref.on('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    console.log("Data"+childData['title'],childKey);
    console.log("Id: "+childData['id']+"  "+childKey)
    //console.log("Data"+childData['content']);
    PostsData(childData['title'],childData['content'],childKey);

  });
});