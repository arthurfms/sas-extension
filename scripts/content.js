window.addEventListener("load", () => {
  // Creating components
  const createComponent = (el, id = "added-element", classes) => {
    let newElement = document.createElement(el);
    newElement.id = id;
    classes.length > 0
      ? classes.forEach((cl) => newElement.classList.add(cl))
      : "";

    document.querySelector("body").append(newElement);
    return id
      ? document.querySelector("body").querySelector(`#${id}`)
      : document.querySelector("body").querySelector("#added-element");
  };

  // Generating components
  const handleComponents = (optionsItems, element, container) => {
    console.log(optionsItems);
    //adding element attributes
    element.title = "SAS Internal Extension";
    element.style =
      "width: 455px; height: 505px; position: fixed; bottom: 5px; right: 5px; border: none; background: transparent;";

    // Create style element
    let styleLink = document.createElement("link");
    styleLink.type = "text/css";
    styleLink.rel = "stylesheet";
    styleLink.href =
      "https://arthurfms.github.io/sas-extension/source/source.css";

    let font1 = document.createElement("link");
    let font2 = document.createElement("link");
    let font3 = document.createElement("link");
    font1.rel = "preconnect";
    font1.href = "https://fonts.googleapis.com";
    font2.rel = "preconnect";
    font2.href = "https://fonts.gstatic.com";
    font3.rel = "stylesheet";
    font3.href =
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";

    element.contentWindow.document.head.append(font1);
    element.contentWindow.document.head.append(font2);
    element.contentWindow.document.head.append(font3);
    element.contentWindow.document.head.append(styleLink);
  };

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
        // Handle the page
        let exIframe = createComponent("iframe", "sas-iframe", [
          "sas-extension",
        ]);
        handleComponents(items, exIframe, exIframe.contentWindow.document.body);
      }
    );
  };

  getOptions();
});
