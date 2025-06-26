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

const url = 'https://protect.identityiq.com/idp/idprotect/ai-scams-single/?offercode=431286X1&goal_id=145&transactionid=bd8f49524d50425293ad8cdf75c4a700&offer_id=828&aff_id=1652&aff_sub=SUB_ID&fname=&lname=&email=&address=&city=&state=&zip=&phone=&source=TRAFFIC_TYPE&aff_sub2=&aff_sub3=&aff_click_id=CLICK_ID&utm_campaign=SUB_ID&utm_source=1652&utm_medium=affiliate&planname=SecureMax+with+Antivirus+And+VPN';
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