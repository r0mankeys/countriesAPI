type Theme = 'light' | 'dark';

interface Currency {
  [title: string]: { name: string, symbol: string}
}

interface Language {
  [key: string]: string;
}

interface Country {
    capital: Array<string>;
    cca3: string;
    flags: { png: string; svg: string; alt?: string };
    name: {
      common: string;
      official: string;
      nativeName?: { [key: string]: { official: string; common: string } };
    };
    population: number;
    region: string;
    subregion?: string;
    languages: Language;
    currencies: Currency;
    independent: boolean;
    unMember: boolean;
    tld: Array<string>;
  };

export type { Theme, Country, Currency, Language };
