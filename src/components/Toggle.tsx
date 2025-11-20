import { useState } from "react";

function Toggle() {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggleChange = (event) => {
        const newValue = event.target.checked;
        setIsChecked(newValue);

        if (newValue) {
            console.log("Frontend projects");
            // showFrontendProjects
        } else {
            console.log("Backend projects");
            // showBackendProjects
        }
    };

    return (
        <>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isChecked} onChange={handleToggleChange} className="sr-only peer" />
                <div className="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                <span className="select-none ms-3 text-sm font-medium text-heading">Toggle me</span>
            </label>

        </>
    );
}

export default Toggle;