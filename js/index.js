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
    'Summary2': ['lifeLock-summary']
};

const url = 'https://www.creditscoreiq.com/lander/2-wl/csiq?offercode=431289B0&transactionid=2d3924572582438093e5d97bb4f475f1&offer_id=765&aff_id=1652&aff_sub=%7Bpublisher_or_affid_here%7D&fname=&lname=&email=&address=&city=&state=&zip=&phone=&source=meta&aff_sub2=%7Badditional_sub%7D&aff_sub3=%7Badditional_sub%7D&aff_click_id=%7BclickID_here%7D&utm_campaign=%7Bpublisher_or_affid_here%7D&utm_source=1652&utm_medium=affiliate';
const url2 = 'https://buy.aura.com/a-save?irclickid=UpUS8A0lhxycTVGQ6qUOJ1wxUksWgST-JQlH3M0&iradname=Online%20Tracking%20Link&iradid=899264&irgwc=1&c1=4944332&camp=12398&utm_source=g2gmedia&utm_medium=ir_affiliate&mktp=ir_affiliate&sharedid=';
const sum1 = 'https://www.aura.com/legal/insurance-summary-of-benefits';
const sum2 = 'https://www.nortonlifelock.com/in/en/legal/'

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