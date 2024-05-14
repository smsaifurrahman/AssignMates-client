/** @format */

import React from "react";

const Faqs = () => {
   return (
    <section className=" my-6">
    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl ">
            Frequently Asked Questions
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
                <h3 className="font-semibold ''">How can I create an assignment?</h3>
                <p className="mt-1 ''">
                    To create an assignment, log in and navigate to "Create Assignment". Fill in details and click "Create".
                </p>
            </div>
            <div>
                <h3 className="font-semibold ''">How do I complete an assignment?</h3>
                <p className="mt-1 ''">
                    Complete assignments by logging in, selecting tasks, and submitting work before due dates.
                </p>
            </div>
            <div>
                <h3 className="font-semibold ''">How can I grade my friends' assignments?</h3>
                <p className="mt-1 ''">
                    Access "Grading", review submitted work, and assign grades based on evaluation criteria.
                </p>
            </div>
            <div>
                <h3 className="font-semibold ''">How do I add friends to my account?</h3>
                <p className="mt-1 ''">
                    Search for friends, send requests, and confirm mutual connections to add them to your account.
                </p>
            </div>
            <div>
                <h3 className="font-semibold ''">How can I edit or delete an assignment?</h3>
                <p className="mt-1 ''">
                    Locate the assignment, select "Edit" or "Delete", and save changes if necessary.
                </p>
            </div>
            <div>
                <h3 className="font-semibold ''">Can I collaborate with my friends on assignments?</h3>
                <p className="mt-1 ''">
                    Yes, you can collaborate by creating group assignments and working together on tasks.
                </p>
            </div>
        </div>
    </div>
</section>









   );
};

export default Faqs;
