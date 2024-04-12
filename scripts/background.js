const setMerchantOp = () => {
  const getmer = (info, tab) => {
    let merUrl;
    if (info.selectionText.trim().match(/^\d{1,45}$/)) {
      // if is an affiliate Number
      merUrl = `https://account.shaareasale.com/admin/adminDetailsMerchant.cfm?merchantId=${info.selectionText.trim()}&searchby=${info.selectionText.trim()}`;
    } else {
      // Search for a word or email...
      merUrl = `https://account.shaareasale.com/admin/adminDetailsMerchant.cfm?merchantId=${info.selectionText.trim()}&searchby=${info.selectionText.trim()}`;
    }
    chrome.tabs.create({
      url: merUrl,
    });
  };
  chrome.contextMenus.create({
    title: "Go to Merchant: %s",
    contexts: ["selection"],
    id: "merchant_context",
  });

  chrome.contextMenus.onClicked.addListener(getmer);
};
const setItpOp = () => {
  const getitp = (info, tab) => {
    chrome.tabs.create({
      url: info.selectionText.trim(),
    });
  };
  chrome.contextMenus.create({
    title: "Merchant ITP: %s",
    contexts: ["selection"],
    id: "itp_context",
  });

  chrome.contextMenus.onClicked.addListener(getitp);
};
const setAffiliateOp = () => {
  const getaff = (info, tab) => {
    let affUrl;
    if (info.selectionText.trim().match(/^\d{1,45}$/)) {
      // if is an affiliate Number
      affUrl = `https://account.shareasale.com/admin/adminDetailsAffiliate.cfm?userid=${info.selectionText.trim()}&searchby=${info.selectionText.trim()}`;
    } else {
      // Search for a word or email...
      affUrl = `https://account.shareasale.com/admin/adminDetailsAffiliate.cfm?userid=${info.selectionText.trim()}&searchby=${info.selectionText.trim()}`;
    }
    chrome.tabs.create({
      url: affUrl,
    });
  };
  chrome.contextMenus.create({
    title: "Go to Affiliate: %s",
    contexts: ["selection"],
    id: "affiliate_context",
  });

  chrome.contextMenus.onClicked.addListener(getaff);
};

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
      setMerchantOp();
      setItpOp();
      setAffiliateOp();
    }
  );
};

getOptions();
