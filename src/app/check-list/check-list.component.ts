import { Component, OnInit } from '@angular/core';
import { checkListData } from './checklistSummaryData.js'
import { CheckListSummaryService } from './check-list.service';
@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  constructor(private checkListService: CheckListSummaryService) { }

  studyNo = '';
  tmfSupport = '';
  noOfRows = 0;
  objectKeys = Object.keys;
  objectValues = Object.values
  checkListItems = checkListData;
  fields = [];
  checkListSummaryDetails = {};
  selectedOperation = "";
  selectedId = '';
  checkListIds = [];
  showTable = false;
  showError = false;  


  ngOnInit() {
    this.fields = Object.keys(checkListData)
    this.noOfRows = Object.keys(checkListData).length;    
  }


  clearSummaryDetails(){
    this.checkListSummaryDetails = {
      "studyNo": null,
      "tmfSupport": null,
      "fppDate": null,
      "risDate": null,
      "crisDate": null,
      "fpfvDate": null,
      "sivDate": null,
      "lplvDate": null,
      "siteCovDates": null,
      "pubCsrDate": null,
      "countryLplvDate": null,
      "initialHqToc": null,
      "createCsrTracker": null,
      "hqCttTmf": null,
      "createCToc": null,
      "afterFppQcChecklist": null,
      "initialSToc": null,
      "updateCtocSiv": null,
      "updateHqTocFpfv": null,
      "createEtmf": null,
      "updateCtocBetweenSiv": null,
      "updateCtocBetweenLplv": null,
      "updateStocSiv": null,
      "updateStocLplv": null,
      "updateHqTocBetweenFpfv": null,
      "updateHqTocBetweenLplv": null,
      "yearlyQcChecklist": null,
      "updateStocCov": null,
      "qcGapAnalysis": null,
      "updateCtocLplv": null,
      "updateHqTocLplv": null,
      "beforeCsrQcChecklist": null,
      "updateHqTocBeforeCsr": null,
      "updateCtocBeforeCsr": null,
      "updateStocBeforeCsr": null,
      "finalizeHqToc": null,
      "submitHqPTmf": null,
      "finalizeCToc": null,
      "submitPTmf": null,
      "finalizeSToc": null,
      "noCrediDocuments": null,
      "noDoctoVTOC": null,
      "uploadAoRs": null,
      "beforeInitialFppComment1": null,
      "beforeInitialFppComment2": null,
      "afterInitialFppComment": null,
      "beforeRisComment": null,
      "countrySivComment": null,
      "fpfvComment": null,
      "commentBetweenSivLplv": null,
      "commentBetweenFpLp": null,
      "yearlyFromInitialComment": null,
      "siteCoovComment": null,
      "countryLplvComment": null,
      "lplvComment": null,
      "beforePubCsrComment": null,
      "beforeCsrComment": null,
      "afterPubCsrComment": null,
      "afterCsrComment": null,
      "ctemplateToc": null,
      "ptmfSetup": null
  };
  }

  deleteChecklistDetails() {
    this.checkListService.deleteChecklistSummary( this.selectedId).subscribe((res) => {
      this.selectedOperation = '';
      this.showTable = false;
    this.selectedId = '';
    this.tmfSupport = '';
    this.studyNo = '';
    this.clearSummaryDetails();
    })
  }

  updateOperation(operation) {
    this.selectedOperation = operation;
    if(operation == 'edit') {
      this.checkListService.getCheckListIds().subscribe((idsList) =>{
        this.checkListIds = idsList;
      })
    } else {
      this.clearSummaryDetails();
      this.showError = false;
      this.showTable = true;
    }
  }

  cancelOperation() {
    this.selectedOperation = '';
    this.showTable = false;
    this.selectedId = '';
    this.tmfSupport = '';
    this.studyNo = '';
    this.clearSummaryDetails();
  }

  saveDetails() {
    if(this.selectedOperation == 'edit') {
      this.checkListService.saveCheckListDetails(this.checkListSummaryDetails, this.selectedId).subscribe((res) => {
        this.selectedOperation = '';
        this.showTable = false;
      this.selectedId = '';
      this.tmfSupport = '';
      this.studyNo = '';
      this.clearSummaryDetails();
      })
    } else {
    
      this.checkListSummaryDetails['studyNo'] = this.studyNo;
      this.checkListSummaryDetails['tmfSupport'] = this.tmfSupport;
      if(this.studyNo && this.tmfSupport) {
        this.checkListService.addNewChecklistDetails(this.checkListSummaryDetails).subscribe(() => {
          this.selectedOperation = '';
          this.showTable = false;
        this.selectedId = '';
        this.tmfSupport = '';
        this.studyNo = '';
        this.clearSummaryDetails();
        })
      } else {
        this.showError = true;
      }
      
    }
    
  }

  getCheckListDetails() {
    this.checkListService.getCheckListSummary(this.selectedId).subscribe((summaryDetails) => {
      
      this.checkListSummaryDetails = summaryDetails;
      this.studyNo = summaryDetails['studyNo'];
      this.tmfSupport = summaryDetails['tmfSupport'];
      this.showError = false;
      this.showTable = true;
    })


  }

}
