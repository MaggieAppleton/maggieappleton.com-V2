import { SeedlingIcon, BuddingIcon, EvergreenIcon } from "./AllIcons";

export default function GrowthIcon({ growthStage, size }) {
    if (growthStage === "seedling") {
        return (
            <SeedlingIcon
                width={size ? size : "22"}
                height={size ? size : "22"}
            />
        );
    } else if (growthStage === "budding") {
        return (
            <BuddingIcon
                width={size ? size : "22"}
                height={size ? size : "22"}
            />
        );
    } else if (growthStage === "evergreen") {
        return (
            <EvergreenIcon
                width={size ? size : "22"}
                height={size ? size : "22"}
            />
        );
    } else if (growthStage === "draft") {
        return (
            <SeedlingIcon
                width={size ? size : "22"}
                height={size ? size : "22"}
            />
        );
    }
}
