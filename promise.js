function asyncWithCallback(callback1, callback2) {
    setTimeout(function () {
      callback1();
    }, 2000);
    setTimeout(function () {
      callback2();
    }, 4000);
  }
  
  asyncWithCallback(
    function () {
      console.log("CALLBACK 1");
    },
    function () {
      console.log("CALLBACK 2");
    }
  );
  

  function asyncWithPromise() {
      return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve("some data");
          }, 2000);
          setTimeout(function () {
            reject("some error info");
          }, 1000);
      })
  }

  asyncWithPromise().then(
      function (data) {
          console.log("PROMISE RESOLVED", data);
      }
  ).catch( function(error) {
      console.log("PROMISE REJECTED", error);
  })