window.addEventListener("load", () => {
  // Creating components
  const createComponent = (el, id = "added-element", classes) => {
    let newElement = document.createElement(el);
    id ? (newElement.id = id) : "";
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
    //adding element attributes
    element.src =
      "https://arthurfms.github.io/sas-extension/source/source.html";
    element.title = "SAS Internal Extension";
    element.style =
      "width: 455px; height: 505px; position: fixed; bottom: 5px; right: 5px; border: none;";

    container.classList.add("sas-extension");
    // adding CSS
    let styleEl = document.createElement("link");
    styleEl.type = "text/css";
    styleEl.rel = "stylesheet";
    styleEl.href =
      "https://arthurfms.github.io/sas-extension/source/source.css";

    element.contentWindow.document.head.append(styleEl);
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
