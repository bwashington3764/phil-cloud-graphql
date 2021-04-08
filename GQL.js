const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
    type Donation_Data {
        Designation_ID: Int
        Donation_Date: String
        Campaign_ID: Int
        Campaign_Name: String
        Impact_Fund_ID: String
        Impact_Fund_Name: String
        Nonprofit_ID: Int
        Nonprofit_Name: String
        Amount_Org: Int
        Org_Currency: String
        Amount_Donor: Int
        Donor_Currency: String
        Amount_USD: Int
        Pledge_Type: String
        Status: String
        Cause_ID: Int
        Cause: String
        SDG_ID: Int
        SDG: String
        Donation_ID: Int
        Subscription_ID: String
        Last_Activity_Date: String
        Nonprofit_Street: String
        Nonprofit_City: String
        Nonprofit_State: String
        Write_In_Name: String
        Write_In_Tax_ID: String
        Recurring_Start_Date: String
        Recurring_End_Date: String
        Payment_Type: String
        Person_Id: Int
        Work_Email: String
        Employee_Number: String
        First_Name: String
        Last_Name: String
        Title: String
        Department: String
        Office: String
        Region: String
        Work_Address_Line_1: String
        Work_Address_Line_2: String
        Work_City: String
        Work_State: String
        Work_Postal_Code: Int
        Work_Postal_Code_Ext: Int
        Work_Country: String
        Work_Phone: String
        Annual_Installment_Count: Int
        Language_Preference: String
        Time_Zone: String
        Ask_Ladder_Single_Gift_Amount: String
        Job_Level: String
        Employment_Status: String
        Line_of_Business: String
        Cost_Center: String
        Account_Status: String     
    }
    
    type Donation_Participation {
        Person_ID: Int
        Work_Email: String
        First_Name: String
        Last_Name: String
        Participated: String
        Donation_Date: String
        Employee_Number: String
        Title: String
        Department: String
        Office: String
        Region: String
        Work_Address_Line_1: String
        Work_Address_Line_2: String
        Work_City: String
        Work_State: String
        Work_Postal_Code: Int
        Work_Postal_Code_Ext: Int
        Work_Country: String
        Work_Phone: String
        Language_Preference: String
        Job_Level: String
        Employment_Status: String
        Line_Of_Business: String
        Cost_Center: String
    }

    type Volunteer_Activity {
        person_id: Int
        time_log_entry_id: String
        registration_id: String
        datetime_utc: String
        salutation: String
        volunteer_firstname: String
        volunteer_middlename: String
        volunteer_lastname: String
        volunteer_email: String
        skills_matched: String
        hours_type: String
        volunteer_type: String
        attendance_type: String
        schedule_type: String
        beneficiary_name: String
        volunteer_opportunity_name: String
        volunteer_opportunity_id: String
        volunteer_opportunity_creation_time: String
        volunteer_opportunity_organizer_email: String
        activity_description: String
        user_registration_time: String
        registration_status: String
        causes: String
        sdgs: String
        shift_total_capacity: String
        campaign_id: String
        campaign_name: String
        address_line: String
        address_line2: String
        locality: String
        admin_area: String
        postal_code: Int
        country: String
        total_hours: String
        external_id: String
        secondary_external_id: String
        employee_number: Int
        federation_id: String
        suffix: String
        nickname: String
        title: String
        department: String
        office: String
        region: String
        work_address: String
        work_address2: String
        work_city: String
        work_state: String
        work_postal_code: Int
        work_postal_code_ext: Int
        work_country: String
        work_phone: String
        work_email: String
        person_address: String
        person_address2: String
        person_city: String
        person_state: String
        person_postal_code: String
        person_postal_code_ext: String
        person_country: String
        leadership_recognition_name: String
        annual_pay_periods: String
        preferred_currency: String
        language_preference: String
        time_zone: String
        ask_ladder_single_gift_amount: String
        disable_payroll_deduction: Boolean
        job_level: String
        employment_status: String
        line_of_business: String
        cost_center: String
        login_method: String
        welcome_email: String
        is_bonus_payroll_enabled: Boolean
    }

    type Volunteering_Participation {
        person_id: Int
        work_email: String
        first_name: String
        last_name: String
        sign_up_participation: String
        log_hours_participation: String
    }

    type Query {
        Donation_Data: [Donation_Data]
        Donation_Participation: [Donation_Participation]
        Volunteer_Activity: [Volunteer_Activity]
        Volunteering_Participation: [Volunteering_Participation]
    }`;

    module.exports = {typeDefs}