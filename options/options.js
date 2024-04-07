window.addEventListener("load", () => {
  let optionMenus = document.querySelectorAll(".options-section");
  optionMenus.forEach((menu) => {
    menu
      .querySelector(".section-title")
      .addEventListener("click", (evt) =>
        menu.classList.toggle("options-section_open")
      );
    menu
      .querySelector(".section-handler")
      .addEventListener("click", (evt) =>
        menu.classList.toggle("options-section_open")
      );
  });

  const regexArr = [
    /^#([0-9a-f]{3}){1,2}$/i,
    /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i,
    /([0-9a-f]{3}){1,2}$/i,
    /[0-9A-F]{6}[0-9a-f]{0,2}$/i,
  ];
  // Saves options to chrome.storage
  const saveOptions = () => {
    let activateDatafeed = document
      .querySelector("#datafeed .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let sasUI = document
      .querySelector("#sas-ui .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let decoder = document
      .querySelector("#decoder .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let ftpCred = document
      .querySelector("#ftp .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let getMerchant = document
      .querySelector("#get-merchant .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let itp = document
      .querySelector("#itp-merchant .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let testMerchant = document
      .querySelector("#test-merchant .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let getAffiliate = document
      .querySelector("#get-affiliate .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let testAffiliate = document
      .querySelector("#test-affiliate .option__selection")
      .classList.contains("option__selection_selected")
      ? true
      : false;
    let backgroundColor = setColorElement(
      regexArr,
      document.querySelector("#background-color .option__input").value,
      "#F4F5F4"
    );
    document.querySelector("#background-color .option__input").placeholder =
      setColorElement(
        regexArr,
        document.querySelector("#background-color .option__input").value,
        "#F4F5F4"
      );
    document.querySelector("#background-color .option__input").value = "";
    let textColor = setColorElement(
      regexArr,
      document.querySelector("#text-color .option__input").value,
      "#333333"
    );
    document.querySelector("#text-color .option__input").placeholder =
      setColorElement(
        regexArr,
        document.querySelector("#text-color .option__input").value,
        "#333333"
      );
    document.querySelector("#text-color .option__input").value = "";
    let btnTextColor = setColorElement(
      regexArr,
      document.querySelector("#btn-text-color .option__input").value,
      "#333333"
    );
    document.querySelector("#btn-text-color .option__input").placeholder =
      setColorElement(
        regexArr,
        document.querySelector("#btn-text-color .option__input").value,
        "#333333"
      );
    document.querySelector("#btn-text-color .option__input").value = "";
    let buttonColor = setColorElement(
      regexArr,
      document.querySelector("#button-color .option__input").value,
      "#F9B417"
    );
    document.querySelector("#button-color .option__input").placeholder =
      setColorElement(
        regexArr,
        document.querySelector("#button-color .option__input").value,
        "#F9B417"
      );
    document.querySelector("#button-color .option__input").value = "";

    chrome.storage.sync.set(
      {
        datafeed: activateDatafeed,
        sasUI: sasUI,
        decoder: decoder,
        ftpCred: ftpCred,
        getMerchant: getMerchant,
        testMerchant: testMerchant,
        itp: itp,
        getAffiliate: getAffiliate,
        testAffiliate: testAffiliate,
        backgroundColor: backgroundColor,
        textColor: textColor,
        btnTextColor: btnTextColor,
        buttonColor: buttonColor,
      },
      () => {
        // Update status to let user know options were saved.
        const status = document.querySelector(".action__status");
        status.textContent = "Options saved!";
        setTimeout(() => {
          status.textContent = "";
        }, 750);
      }
    );
  };

  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
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
        items.datafeed
          ? document
              .querySelector("#datafeed .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.sasUI
          ? document
              .querySelector("#sas-ui .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.decoder
          ? document
              .querySelector("#decoder .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.ftpCred
          ? document
              .querySelector("#ftp .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.getMerchant
          ? document
              .querySelector("#get-merchant .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.itp
          ? document
              .querySelector("#itp-merchant .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.testMerchant
          ? document
              .querySelector("#test-merchant .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.getAffiliate
          ? document
              .querySelector("#get-affiliate .option__selection")
              .classList.add("option__selection_selected")
          : "";
        items.testAffiliate
          ? document
              .querySelector("#test-affiliate .option__selection")
              .classList.add("option__selection_selected")
          : "";
        document.querySelector("#background-color .option__input").placeholder =
          setColorElement(regexArr, items.backgroundColor, "#F4F5F4");
        document.querySelector("#text-color .option__input").placeholder =
          setColorElement(regexArr, items.textColor, "#333333");
        document.querySelector("#btn-text-color .option__input").placeholder =
          setColorElement(regexArr, items.btnTextColor, "#333333");
        document.querySelector("#button-color .option__input").placeholder =
          setColorElement(regexArr, items.buttonColor, "#F4F5F4");
      }
    );
  };

  function setColorElement(regexArray, input, std) {
    let res = std;
    regexArray.forEach((reg, index) => {
      if (reg.test(input)) {
        res = input.includes("#") ? input : `#${input}`;
        console.log(res);
        return res.toUpperCase();
      }
    });
    return res.toUpperCase();
  }

  let options = document.querySelectorAll(".option__selection");
  options.forEach((op) => {
    op.addEventListener("click", (evt) => {
      op.classList.toggle("option__selection_selected");
    });
  });

  restoreOptions();
  document
    .querySelector("#save .action__button")
    .addEventListener("click", saveOptions);
});
