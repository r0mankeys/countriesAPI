import type { Currency, Language } from "./types.ts";

const formatNumber = (num: number) => new Intl.NumberFormat("en-US").format(num);

const formatMultipleCurrencies = (currenies: Currency) => {
    return Object.entries(currenies).map(([name, currency], index, arr) => {
        if (index < arr.length - 1) {
            return <span key={name}>{currency.name}, </span>;
        }
        return <span key={name}>{currency.name}</span>;
    });
}

const formatMultipleLanguages = (language: Language) => {
    return Object.entries(language).map(([code, language], index, arr) => {
        if (index < arr.length - 1) {
            return <span key={code}>{language}, </span>;
        } else {
            return <span key={code}>{language}</span>;
        }
    });
}    

const formatBoolean = (bool: boolean) => bool ? "Yes" : "No";

const formatTopLevelDomain = (domains: Array<string>) => {
    return domains.map((domain, index, arr) => {
        if (index < arr.length - 1) {
            return <span key={domain}>{domain}, </span>;
        } else {
            return <span key={domain}>{domain}</span>;
        }
    });
}

export { formatNumber, formatMultipleCurrencies, formatMultipleLanguages, formatBoolean, formatTopLevelDomain };
