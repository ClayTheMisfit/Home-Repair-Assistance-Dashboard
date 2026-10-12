export type RecordItem={id:number;name:string;phone:string;category:string;eligibility:'Unconfirmed'|'Excludes mobile homes'|'Potentially eligible';status:string;website:string;notes:string;followUp:string;lastContact:string};
export const seed:RecordItem[]=[
[1,'Builders Care','904-727-3443','Structural repair','Unconfirmed',''],
[2,'Northeast Florida Community Action Agency (NFCAA)','904-398-7472','Weatherization','Unconfirmed','https://nfcaa.org'],
[3,'Jacksonville Military Affairs and Veterans Department','904-255-5550','Veteran referrals','Unconfirmed',''],
[4,'FloridaCommerce','850-717-8450','State program referrals','Unconfirmed',''],
[5,'Ability Housing','904-359-9650','Housing referrals','Unconfirmed',''],
[6,'Center for Independent Living Jacksonville','904-399-8484','Disability assistance','Unconfirmed',''],
[7,'Beaches Habitat for Humanity','904-595-5806','Home repair','Unconfirmed',''],
[8,'United Way 211','211 / 904-632-0600','Referrals','Unconfirmed',''],
[9,'Rebuilding Together Greater Florida','844-411-2349','Critical repairs','Potentially eligible','https://rtgfl.org/get-help/'],
[10,'Operation Lifeline','904-863-3099','Veteran assistance','Unconfirmed',''],
[11,'Operation Homefront','See website','Veteran assistance','Unconfirmed','https://operationhomefront.org/our-programs/'],
[12,'St. Johns Housing Partnership','904-215-1229','Housing rehabilitation','Unconfirmed',''],
[13,'North Riverside Development Organization','904-387-9634','Neighborhood repair','Unconfirmed',''],
[14,'Jacksonville Emergency Repair Program','904-255-8229','Emergency repair','Excludes mobile homes',''],
[15,'Jacksonville Limited Repair Program','904-255-8229','Limited repair','Excludes mobile homes',''],
[16,'Jacksonville Utility Tap-In Program','904-255-8200','Utilities','Excludes mobile homes',''],
[17,'Jacksonville Home Roof Rehabilitation Program','904-255-2489','Roof repair','Excludes mobile homes',''],
[18,'Rebuild Florida Housing Repair and Replacement','888-530-3025','Disaster recovery','Unconfirmed','https://rebuildflorida.gov/eligibility/']
].map(([id,name,phone,category,eligibility,website])=>({id:id as number,name:name as string,phone:phone as string,category:category as string,eligibility:eligibility as RecordItem['eligibility'],website:website as string,status:'Not contacted',notes:'',followUp:'',lastContact:''}));
