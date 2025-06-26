
const getUrlParams = () => {
    // Get query string from URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // console.log("urlParams:", urlParams);

    const params = [
        'source_id',
        'sub1',
        'sub2',
        'sub3',
        'sub4',
        'sub5',
    ];

    const params2 = [
        'fbclid',
        'gclid',
        'ttclid',
        'sscid',
    ];

    // Custom default values for specific keys
    const defaultValues = {
        sub1: 'mba101'
    };

    const parameter = {};
    const parameter2 = {};

    params.forEach((key) => {
        let value = urlParams.get(key);
        if (!value) {
            // console.log(`${key} - doesn't have any value.`);
            value = defaultValues[key] || ''; // Use default or fallback to 'N/A'
        }
        parameter[key] = value;
    });

    params2.forEach((key2) => {
        let value2 = urlParams.get(key2);
        if (!value2) {
            // console.log(`${key2} - doesn't have any value.`);
            value2 = ''
        }
        parameter2[key2] = value2;
    })

    if (parameter.sub4 === '') {
        Object.values(parameter2).forEach((value, i) => {

            if (value) {
                parameter.sub4 = parameter2[Object.keys(parameter2)[i]];
                return;
            }
        })
    }

    return parameter;
}

// Links Updating through Id's
const Tags = {
    'IdentityIq': [
        'identityIQ-Poster',
        'identityIq-Plans',
        'identityIq-Site',
        'identityIq-Link',
        'identityIq-Link2',
        'identityIq-Plans2',
        'identityIq-Site2',
        'lifeLock-Plans',
        'lifeLock-officialSite',
        'identityGuard-Plans',
        'identityGuard-officialSite'
    ],
    'Aura': [
        'aura-browse-plans',
        'aura-official-site',
        'auraPoster'
    ],
    'Summary1': ['aura-summary'],
    // 'Summary2': ['lifeLock-summary']
};

const {
    source_id,
    sub1,
    sub2,
    sub3,
    sub4,
    sub5,
} = getUrlParams();

const url = `https://trk.identityiq.com/3N116J1/2G2SGCP/?source_id=${source_id}&sub1=${sub1}&sub2=${sub2}&sub3=${sub3}&sub4=${sub4}&sub5=${sub5}`;

// const url = 'https://protect.identityiq.com/idp/idprotect/ai-scams-single/?offercode=431286X1&goal_id=145&transactionid=bd8f49524d50425293ad8cdf75c4a700&offer_id=828&aff_id=1652&aff_sub=SUB_ID&fname=&lname=&email=&address=&city=&state=&zip=&phone=&source=TRAFFIC_TYPE&aff_sub2=&aff_sub3=&aff_click_id=CLICK_ID&utm_campaign=SUB_ID&utm_source=1652&utm_medium=affiliate&planname=SecureMax+with+Antivirus+And+VPN';
const url2 = 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=';
const sum1 = 'https://www.aura.com/legal/insurance-summary-of-benefits';
const sum2 = 'https://www.nortonlifelock.com/in/en/legal/';

Object.entries(Tags).forEach(([tagName, ids]) => {
    ids.forEach((id) => {
        const element = document.getElementById(id);

        element ? (tagName === 'Aura' ? (element.href = url2, element.target = '_blank') :
            (tagName === 'IdentityIq') ? (element.href = url, element.target = '_blank') :
                (tagName === 'Summary1') ? (element.href = sum1, element.target = '_blank') :
                    (element.href = sum2, element.target = '_blank'))
            : console.log(`Element with ID ${id} not found.`);
    });
});
