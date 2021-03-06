import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const short = (text) => {
  try {
    return text.substring(0, 600);
  } catch (err) {
    return "Not description";
  }
};

export default function CollegeList() {
  const [colleges, setColleges] = useState(null);
  const { collegeId } = useParams();
  useEffect(() => {
    getData();
    async function getData() {
      const url1 = `https://api.collegeai.com/v1/api/college/info?api_key=zPrUOEVtV86G&college_ids=${collegeId}&info_ids=name%2CmajorGraduates%2CentryProb%2CappliedDist%2CacceptedDist%2CclassSizeRangeOver100%2CclassSizeRange2To9%2CclassSizeRange10To19%2CclassSizeRange20To29%2CclassSizeRange30To39%2CclassSizeRange40To49%2CclassSizeRange50To99%2CnumberOfFullTimeFaculty%2CnumberOfPartTimeFaculty%2CtotalEnrolled%2CacceptanceRate%2CstudentsSubmittingACT%2CstudentsSubmittingSAT%2CtotalApplicants%2CmenApplicants%2CwomenApplicants%2CtotalAdmitted%2CmenAdmitted%2CwomenAdmitted%2CtotalEnrolled%2CmenEnrolled%2CwomenEnrolled%2ChsGPARequirement%2ChsRankRequirement%2CsecondarySchoolRecordRequirement%2CTOEFLRequirement%2CcompletionOfCollegePreparatoryProgram%2Crecommendations%2CformalDemonstrationOfCompetencies%2CadmissionTestScores%2CotherTest%2CsatMathPercentile25%2CsatMathPercentile75%2CsatReadingPercentile25%2CsatReadingPercentile75%2CactCumulativePercentile25%2CactCumulativePercentile75%2CactMathPercentile25%2CactMathPercentile75%2CactEnglishPercentile25%2CactEnglishPercentile75%2CactSciencePercentile25%2CactSciencePercentile75%2CactWritingPercentile25%2CactWritingPercentile75%2CfederalLoanRate%2CloanPrincipal%2CpercentStudentsReceivingFederalGrantAid%2CavgCostOfAttendance%2CaverageNetCost%2CavgNetPrice%2CinStateTuition%2CoutOfStateTuition%2CanyAlternativeTuitionPlansOfferedByInstitution%2CtuitionGuaranteePlan%2CprepaidTuitionPlan%2CtuitionPaymentPlan%2CotherAlternativeTuitionPlan%2CpercentOfStudentsWhoReceiveFinancialAid%2CstudentShareByIncomeLevel0To30000%2CstudentShareByIncomeLevel30001To48000%2CstudentShareByIncomeLevel480001To75000%2CstudentShareByIncomeLevel75001To110000%2CstudentShareByIncomeLevel110001Plus%2CnetPriceByIncomeLevel%2CnetPriceByIncomeLevel0To3000%2CnetPriceByIncomeLevel30001To48000%2CnetPriceByIncomeLevel48001To75000%2CnetPriceByIncomeLevel75001To110000%2CnetPriceByIncomeLevel110001Plus%2CpercentMale%2CpercentFemale%2CundergraduateSize%2CdemographicsMen%2CdemographicsWomen%2CdemographicsWhite%2CdemographicsBlack%2CdemographicsHisp%2CdemographicsAsian%2CdemographicsAian%2CdemographicsNhpi%2Cdemographics2mor%2CdemographicsNra%2CdemographicsUnkn%2CdemographicsAvgFamilyIncome%2CdemographicsMedianFamilyIncome%2CdemographicsMedianHouseholdIncome%2CpercentFirstGeneration%2CaverageAgeOfEntry%2ConCampusHousingAvailable%2CfreshmenRequiredToLiveOnCampus%2CsororitiesPercentParticipation%2CfraternitiesPercentParticipation%2CrotcOffered%2CrotcArmyOffered%2CrotcNavyOffered%2CrotcAirforceOffered%2Ccity%2CstateAbbr%2CstateName%2Czipcode%2Caddr%2ClocationLat%2ClocationLong%2Caliases%2Ccolors%2CisPrivate%2ClocaleClass%2ClocaleSize%2CstudentFacultyRatio%2CtypeYear%2Cregion%2CmenOnly%2CwomenOnly%2CcalendarSystem%2CreligiousAffiliation%2CprimaryFaith%2CstudentFacultyRatio%2CshortDescription%2ClongDescription%2CdescriptionCitation%2CfinancialAidWebsite%2CadmissionsWebsite%2CapplicationWebsite%2Cwebsite%2CnetPriceWebsite%2CvetMilitaryServiceWebsite%2CstudentRightToKnowAthleteWebsite%2CcampusImage%2CrankingsBestColleges%2CrankingsBestValueColleges%2CrankingsBestCollegeAcademics%2CrankingsTopPrivate%2CrankingsMostDiverseColleges%2CrankingsBestCollegeCampuses%2CrankingsBestCollegeAthletics%2CrankingsBestCollegesForBiology%2CrankingsBestCollegesForBusiness%2CrankingsBestCollegeFood%2CrankingsTopPartySchools%2CrankingsBestCollegeLocations%2CrankingsBestCollegeProfessors%2CrankingsBestStudentLife%2CrankingsHardestToGetIn%2CrankingsBestStudentAthletes%2CrankingsHottestGuys%2CrankingsBestCatholicColleges%2CrankingsCollegesThatAcceptTheCommonApp%2CrankingsBestCollegesForChemistry%2CrankingsBestCollegesForCommunications%2CrankingsBestCollegesForComputerScience%2CrankingsBestCollegesForEconomics%2CrankingsBestCollegesForHistory%2CrankingsBestCollegesForNursing%2CrankingsMostLiberalColleges%2CrankingsMostConservativeColleges%2CrankingsBestCollegesForArt%2CrankingsBestCollegesForEngineering%2CrankingsBestGreekLifeColleges%2CrankingsCollegesWithNoApplicationFee%2CrankingsBestCollegesForDesign%2CrankingsBestTestOptionalColleges%2CrankingsBestCollegesForPhysics%2Ctheprincetonreviewbest382colleges2018%2Ccollegesthatchangelivesfourthedition%2CgraduationRate%2CmedianEarningsSixYrsAfterEntry%2CmedianEarningsTenYrsAfterEntry`;
      const response = await fetch(url1);
      const data = await response.json();
      const res = data.colleges;
      setColleges(res);
    }
  }, []);
  return (
    <div className="w-full h-full">
      {colleges && (
        <div className="">
          {colleges.map((college) => (
            <>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src={college.campusImage}
                  alt=""
                />
              </div>
              <div className="m-6">
                <h1 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                  {college.name}
                </h1>
                <div className="w-2/5">
                  <p className="text-lg font-medium leading-6 text-gray-900">
                    {college.city + ", " + college.stateName}
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900">
                    {college.typeYear} college
                  </p>
                  <p className="text-lg font-medium leading-6 text-gray-900">
                    Median price: ${college.netPriceByIncomeLevel110001Plus}
                  </p><p className="text-lg font-medium leading-6 text-gray-900">
                    SAT admitted score: {college.satMathPercentile25 + college.satReadingPercentile25}
                  </p>
                  <p className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      {short(college.longDescription)}
                    </p>
                  </p>
                  <div className="mt-2 flex flex-wrap flex-row">
                    <a
                      className="w-48 py-2 px-4 m-1  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      href={"https://" + college.website}
                    >
                      College site
                    </a>
                    <a
                      className="w-48 py-2 px-4 m-1  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      href={"https://" + college.admissionsWebsite}
                    >
                      College admissions
                    </a>
                    <a
                      className="w-48 py-2 px-4 m-1  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      href={"https://" + college.financialAidWebsite}
                    >
                      Financial aid
                    </a>
                    <a
                      className="w-48 py-2 px-4 m-1  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      href={"https://" + college.applicationWebsite}
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
