window.addEventListener("load", () => {
  // Creating the iframe
  let iframeObject = document.createElement("iframe");
  iframeObject.id = "extension-frame";
  document.querySelector("body").append(iframeObject);
  let iframeBody =
    document.querySelector("#extension-frame").contentWindow.document.body;

  // Getting Options
  const getOptions = () => {
    chrome.storage.sync.get(
      {
        datafeed: true,
        sasUI: true,
        decoder: true,
        ftpCred: true,
        getMerchant: true,
        testMerchant: true,
        itp: true,
        getAffiliate: true,
        testAffiliate: true,
        backgroundColor: "#F4F5F4",
        textColor: "#333333",
        btnTextColor: "#333333",
        buttonColor: "#F9B417",
      },
      (items) => {
        //set objects here
        console.log(items);
      }
    );
  };
  getOptions();
});
