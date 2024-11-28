import FormComponent from "@/components/ApplyForm";

export default function DoctorApplication() {
    return (
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold mb-4">Doctor Application</h1>
        <p className="text-lg text-gray-700 mb-4">
          By applying, you agree to our <span className="text-blue-500">Terms and Conditions</span>. Please read
          carefully before submitting your application. We are committed to ensuring your privacy and security in
          accordance with the applicable laws.
        </p>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="agreement" className="mr-2" />
          <label htmlFor="agreement" className="text-gray-700">
            I agree to the <span className="text-blue-500">Terms and Conditions</span>.
          </label>
        </div>
        {/* <FormComponent/> */}
      </div>

    );
  }
  
  
  