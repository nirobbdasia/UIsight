$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/apple/gcrm/insightui/features/1_TopPanel.feature");
formatter.feature({
  "name": "Application launch, Cases, iOS Cases, Repairs, Reservations, Realtime view",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC1.1 Successful launch of application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TopPanel"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "User opens \"Safari\" browser",
  "keyword": "Given "
});
formatter.match({
  "location": "TopPanelSteps.user_launches_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in on Homepage",
  "keyword": "When "
});
formatter.match({
  "location": "TopPanelSteps.user_in_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify titile of landing page should be \"GCRM Insight Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopPanelSteps.user_validates_the_Homepagetitle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC1.3 Visibility of Icon, Header text \"iOS Cases\", \u0027than yesterday\u0027 under Top Panel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TopPanel"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "User validates Icon of iOSCases component is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "TopPanelSteps.validate_icon_of_iOSCases_component()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates Header text of \"iOS Cases\" is displayed",
  "keyword": "When "
});
formatter.match({
  "location": "TopPanelSteps.validate_header_text_of_iOS_Cases()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates iOS Cases % than yesterday text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TopPanelSteps.validate_iOS_Cases_of_than_yesterday_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates arrow tip of iOSCases is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "TopPanelSteps.validate_arrow_of_iOSCases()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates the tooltip \"Last hours trend\" is displayed on mousehover of graph under iOS Cases component",
  "keyword": "And "
});
formatter.match({
  "location": "TopPanelSteps.validate_the_tooltip_on_iOSCases_of_graphs_as_Last_hours_trend()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User validates the tooltip \"Based on UTC\" is displayed on mousehover on Count under iOS Component",
  "keyword": "And "
});
formatter.match({
  "location": "TopPanelSteps.validte_the_tooltip_on_iOSCases_of_count_as_Based_on_UTC()"
});
formatter.result({
  "status": "passed"
});
});