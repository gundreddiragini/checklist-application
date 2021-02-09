
export var checkListData = {

    "Before initial FPP release": {
        noOfRows:2,
        dates: [{"FPP date": 'fppDate'}, {}],
        data:[{
            "Create initial HQ-TOC, mark applicability":[[{initialHqToc: 'CL'}],'T'],
            "Set up pTMF":[[{ptmfSetup: 'CL'}],'T'],
            "Create C-template TOC":[[{ctemplateToc: 'CL'}],'T'],
            "Create CSR Essential Documents Tracker":[[{createCsrTracker: 'CL'}],'T'],
            "Use the HQ CTT TMF tool to collect input from line functions":[[{hqCttTmf: 'CL'}],'T']
        }, {
            "Create initial C-TOC":[[{createCToc: 'CL'}],'T']
        }],
        comments:['beforeInitialFppComment1','beforeInitialFppComment2']

    },
    "After initial FPP release": {
        noOfRows: 1,
        dates: [{"FPP date": 'fppDate'}],
        data:[{
            "Complete Study Lead QC Checklist (complete new one yearly at FPP anniversary date)":[[{afterFppQcChecklist: 'CL'}],'C'],
        }],
        comments:['afterInitialFppComment']
    },
    "Before RIS": {
        noOfRows: 1,
        dates:[{'RIS date': 'risDate'}],
        data: [{
            "Create initial S-TOC":[[{initialSToc: 'CL'}],'T'],
        }],
        comments:['beforeRisComment']
    },
    "Country SIV": {
        noOfRows: 1,
        dates:[{'C-RIS date': 'crisDate'}],
        data:[{
            "Update C-TOC":[[{updateCtocSiv: 'CL'}],'C'],
        }],
        comments:['countrySivComment']
    },
    "FPFV": {
        noOfRows: 1,
        dates:[{"FPFV Date":'fpfvDate'}],
        data:[{
            "Update HQ-TOC":[[{updateHqTocFpfv: 'CL'}],'C'],
            "Create eTMF Tracker/eTRAC":[[{createEtmf: 'CL'}],'T'],
        }],
        comments:['fpfvComment']
    },
    "Every 6 months between SIV and LPLV" : {
        noOfRows:1,
        dates : [{"SIV Date ": 'sivDate', "LPLV Date" : 'lplvDate'}],
        data:[{
            "Update C-TOC":[[{updateCtocBetweenSiv: 'DT'}, {updateCtocBetweenLplv: 'DT'}],'C'],
            "Update S-TOC":[[{updateStocSiv: 'DT'}, {updateStocLplv: 'DT'}],'C']
        }],
        comments:['commentBetweenSivLplv']
    },
    "Every 6 months between FPFV and LPLV" : {
        noOfRows:1,
        dates:[{"FPFV Date": 'fpfvDate', "LPLV Date": 'lplvDate'}],
        data:[{
            "Update HQ-TOC ":[[{updateHqTocBetweenFpfv: 'DT'}, {updateHqTocBetweenLplv: 'DT'}], 'C'],
        }],
        comments:['commentBetweenFpLp']
    },
    "Yearly from initial FPP release" : {
        noOfRows : 1,
        dates : [{"FPP Date": 'fppDate'}],
        data:[{
            "Complete Study Lead QC Checklist":[[{yearlyQcChecklist: 'CL'}], 'C'],
        }],
        comments:['yearlyFromInitialComment']
    },
    "Site COV" : {
        noOfRows : 1,
        dates : [{"Site COV dates": 'siteCovDates'}],
        data:[{
            "Update S-TOC" : [[{updateStocCov: 'CL'}], 'C'],
            "Perform full QC/gap analysis, send list of outstanding docs to CRA before Sites COV": [[{qcGapAnalysis: 'CL'}], 'C']
        }],
        comments:['siteCoovComment']
    },
    "Country LPLV" : {
        noOfRows : 1,
        dates : [],
        data:[{
            "Update C-TOC ":[[{updateCtocLplv: 'CL'}], 'C'],
        }],
        comments:['countryLplvComment']
    },
    "LPLV" : {
        noOfRows : 1,
        dates : [{"LPLV Date": 'lplvDate'}],
        data:[{
            "Update HQ-TOC ":[[{updateHqTocLplv: 'CL'}], 'C'],
        }],
        comments:['lplvComment']
    },
    "Before CSR publication" : {
        noOfRows:2,
        dates: [{"Pub CSR date": 'pubCsrDate'}, {}],
        data:[{
            "Complete Study Lead QC Checklist ":[[{beforeCsrQcChecklist: 'CL'}],'C'],
            "Update HQ-TOC":[[{updateHqTocBeforeCsr: 'CL'}],'C'],
        }, {
            "Update C-TOC":[[{updateCtocBeforeCsr: 'CL'}],'C'],
            "Update S-TOC":[[{updateStocBeforeCsr: 'CL'}],'C'],
        }],
        comments:['beforePubCsrComment', 'beforeCsrComment']
        

    },
    "After CSR publication (within 60 wd)" : {
        noOfRows:2,
        dates: [{"Pub CSR date": 'pubCsrDate'}, {}],
        data:[{
            "Finalize HQ-TOC, e-signed in CREDI ":[[{finalizeHqToc: 'CL'}],'C'],
            "Submit HQ pTMF archiving form ":[[{submitHqPTmf: 'CL'}],'T'],
        }, {
            "Finalize C-TOC, e-signed in CREDI":[[{finalizeCToc: 'CL'}],'C'],
            "Submit C&S pTMF archiving form":[[{submitPTmf: 'CL'}],'T'],
            "Finalize S-TOC, e-signed in CREDI":[[{finalizeSToc: 'CL'}],'C'],
            "Ensure no Create state documents in CREDI":[[{noCrediDocuments: 'CL'}],'T'],
            "No Documents to Map in VTOC":[[{noDoctoVTOC: 'CL'}],'T'],
            "Upload AoRs":[[{uploadAoRs: 'CL'}],'T'],
        }],
        comments:['afterPubCsrComment', 'afterCsrComment']

    },
}