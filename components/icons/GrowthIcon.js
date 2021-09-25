import { SeedlingIcon, BuddingIcon, EvergreenIcon } from "./AllIcons";

export default function GrowthIcon({ growthStage, size }) {
    if (growthStage === "Seedling") {
        return (
            <SeedlingIcon
                width={size ? size : "22"}
                height={size ? size : "22"}
            />
        );
    } else if (growthStage === "Budding") {
        return (
            <BuddingIcon
                width={size ? size : "22"}
                height={size ? size : "22"}
            />
        );
    } else if (growthStage === "Evergreen") {
        return (
            <EvergreenIcon
                width={size ? size : "22"}
                height={size ? size : "22"}
            />
        );
    }
}
