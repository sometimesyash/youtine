function loadData(){
    // Your web app's Firebase configuration


  var pushupDone = document.getElementById('pushupDone');
  var planksDone = document.getElementById('planksDone');
  var jjDone = document.getElementById('jjDone');
  var runsDone = document.getElementById('runsDone');

  var pushupSet = document.getElementById('pushupSet');
  var planksSet = document.getElementById('planksSet');
  var jjSet = document.getElementById('jjSet');
  var runsSet = document.getElementById('runsSet');


  var urlParams = new URLSearchParams(window.location.search);

  var code = urlParams.get("code");
  var query = firebase.firestore().collection(code);
  query.onSnapshot(function(snapshot){
    snapshot.docChanges().forEach(function(change){
      var message = change.doc.data();
      pushupDone.innerHTML = message.pushups || 0;

      pushupSet.innerHTML = message.pushupW || 20;
      planksDone.innerHTML = message.plank || 0;
      planksSet.innerHTML = message.plankW  || 20;
      jjDone.innerHTML = message.jj || 0;
      jjSet.innerHTML = message.jjW || 20;
      runsDone.innerHTML = message.run || 0;
      runsSet.innerHTML = message.runSet || 20;

    })
  });


}

loadData();
