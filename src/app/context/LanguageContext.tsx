'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'login': 'Log In',
    
    // Hero Section
    'headline': 'Stop Chasing Payments. Start Simplifying Κοινόχρηστα.',
    'subheadline': 'The easiest way for Greek apartment buildings to manage shared expenses, track payments, and communicate clearly. All in one place with OikosPay.',
    'cta.getStarted': 'Get Started Free',
    
    // Features Section
    'features.title': 'Why Building Managers & Tenants Choose OikosPay',
    'features.subtitle': 'Save time, reduce errors, and improve transparency for everyone in the building.',
    
    // Feature 1
    'feature1.title': 'Automate Calculations',
    'feature1.text': 'Set allocation rules once (sq. footage, floor, etc.) and let OikosPay calculate tenant shares instantly.',
    
    // Feature 2
    'feature2.title': 'Streamline Payments',
    'feature2.text': 'Offer tenants secure online payment via Stripe, bank transfer info, or simple cash payment tracking.',
    
    // Feature 3
    'feature3.title': 'Enhance Transparency',
    'feature3.text': 'Give tenants clear breakdowns of every charge and access to their full payment history anytime.',
    
    // Feature 4
    'feature4.title': 'Centralize Communication',
    'feature4.text': 'Use the integrated building feed for announcements, discussions, and keeping everyone informed.',
    
    // How It Works Section
    'howItWorks.title': 'Get Up and Running in Minutes',
    'howItWorks.subtitle': 'Managing shared expenses has never been easier. Here\'s how:',
    
    // Steps
    'step1.title': 'Setup Building',
    'step1.text': 'Admin defines address, apartments, and invites tenants.',
    
    'step2.title': 'Enter Expenses',
    'step2.text': 'Admin inputs recurring or one-off costs & uploads receipts.',
    
    'step3.title': 'Issue & Notify',
    'step3.text': 'System calculates shares, admin issues charges, tenants get notified.',
    
    'step4.title': 'Pay & Track',
    'step4.text': 'Tenants pay easily online or mark cash/bank payment. Admin tracks all statuses.',
    
    // Features for Roles Section
    'roles.title': 'Powerful Tools for Everyone',
    
    // Admin Features
    'admin.title': 'Built for Administrators',
    'admin.feature1': 'Automated Calculations & Allocation Rules',
    'admin.feature2': 'Real-time Payment Dashboard',
    'admin.feature3': 'Expense Logging & Receipt Storage',
    'admin.feature4': 'Automated Reminders for Late Payments',
    'admin.feature5': 'Central Document Repository',
    'admin.feature6': 'Building Feed Moderation',
    
    // Tenant Features
    'tenant.title': 'Designed for Tenants',
    'tenant.feature1': 'Clear Expense Breakdowns',
    'tenant.feature2': 'Secure Online Payments (Card/Bank/Cash)',
    'tenant.feature3': 'Easy Access to Payment History',
    'tenant.feature4': 'Instant Notifications for Charges & Payments',
    'tenant.feature5': 'Downloadable Receipts',
    'tenant.feature6': 'Building Feed Participation',
    
    // Final CTA Section
    'finalCta.title': 'Ready to Simplify Your Building\'s Finances?',
    'finalCta.subtitle': 'Join hundreds of buildings managing their κοινόχρηστα the smart way. Sign up free today!',
    'finalCta.button': 'Sign Up Free Now',
    
    // Footer
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact',
    'footer.copyright': ' 2025 OikosPay. All rights reserved.',
  },
  el: {
    // Header
    'login': 'Σύνδεση',
    
    // Hero Section
    'headline': 'Σταματήστε το Κυνήγι Πληρωμών. Ξεκινήστε την Απλοποίηση των Κοινοχρήστων.',
    'subheadline': 'Ο ευκολότερος τρόπος για πολυκατοικίες στην Ελλάδα να διαχειρίζονται τα κοινόχρηστα, να παρακολουθούν πληρωμές & να επικοινωνούν καθαρά. Όλα σε ένα μέρος με το OikosPay.',
    'cta.getStarted': 'Ξεκινήστε Δωρεάν',
    
    // Features Section
    'features.title': 'Γιατί οι Διαχειριστές & Ένοικοι Επιλέγουν το OikosPay',
    'features.subtitle': 'Εξοικονομήστε χρόνο, μειώστε τα λάθη και βελτιώστε τη διαφάνεια για όλους στην πολυκατοικία.',
    
    // Feature 1
    'feature1.title': 'Αυτοματοποίηση Υπολογισμών',
    'feature1.text': 'Ορίστε κανόνες κατανομής μία φορά (τ.μ., όροφος, κλπ) και αφήστε το OikosPay να υπολογίσει άμεσα το μερίδιο κάθε ενοίκου.',
    
    // Feature 2
    'feature2.title': 'Απλοποίηση Πληρωμών',
    'feature2.text': 'Προσφέρετε στους ενοίκους ασφαλή online πληρωμή μέσω Stripe, στοιχεία τραπεζικής μεταφοράς ή απλή παρακολούθηση πληρωμής μετρητών.',
    
    // Feature 3
    'feature3.title': 'Ενίσχυση Διαφάνειας',
    'feature3.text': 'Δώστε στους ενοίκους σαφείς αναλύσεις κάθε χρέωσης και πρόσβαση στο πλήρες ιστορικό πληρωμών τους ανά πάσα στιγμή.',
    
    // Feature 4
    'feature4.title': 'Συγκέντρωση Επικοινωνίας',
    'feature4.text': 'Χρησιμοποιήστε την ενσωματωμένη ροή κτιρίου για ανακοινώσεις, συζητήσεις και για να μένουν όλοι ενήμεροι.',
    
    // How It Works Section
    'howItWorks.title': 'Ξεκινήστε σε Λίγα Λεπτά',
    'howItWorks.subtitle': 'Η διαχείριση κοινοχρήστων δεν ήταν ποτέ ευκολότερη. Δείτε πώς:',
    
    // Steps
    'step1.title': 'Δημιουργία Κτιρίου',
    'step1.text': 'Ο διαχειριστής ορίζει διεύθυνση, διαμερίσματα και προσκαλεί ενοίκους.',
    
    'step2.title': 'Καταχώρηση Δαπανών',
    'step2.text': 'Ο διαχειριστής εισάγει τακτικά ή έκτακτα έξοδα & ανεβάζει αποδείξεις.',
    
    'step3.title': 'Έκδοση & Ειδοποίηση',
    'step3.text': 'Το σύστημα υπολογίζει μερίδια, ο διαχειριστής εκδίδει χρεώσεις, οι ένοικοι ειδοποιούνται.',
    
    'step4.title': 'Πληρωμή & Παρακολούθηση',
    'step4.text': 'Οι ένοικοι πληρώνουν εύκολα online ή δηλώνουν πληρωμή μετρητών/τραπέζης. Ο διαχειριστής παρακολουθεί όλες τις καταστάσεις.',
    
    // Features for Roles Section
    'roles.title': 'Ισχυρά Εργαλεία για Όλους',
    
    // Admin Features
    'admin.title': 'Φτιαγμένο για Διαχειριστές',
    'admin.feature1': 'Αυτόματοι Υπολογισμοί & Κανόνες Κατανομής',
    'admin.feature2': 'Πίνακας Πληρωμών σε Πραγματικό Χρόνο',
    'admin.feature3': 'Καταγραφή Εξόδων & Αποθήκευση Αποδείξεων',
    'admin.feature4': 'Αυτόματες Υπενθυμίσεις για Καθυστερημένες Πληρωμές',
    'admin.feature5': 'Κεντρικό Αποθετήριο Εγγράφων',
    'admin.feature6': 'Διαχείριση Ροής Κτιρίου',
    
    // Tenant Features
    'tenant.title': 'Σχεδιασμένο για Ενοίκους',
    'tenant.feature1': 'Σαφείς Αναλύσεις Εξόδων',
    'tenant.feature2': 'Ασφαλείς Online Πληρωμές (Κάρτα/Τράπεζα/Μετρητά)',
    'tenant.feature3': 'Εύκολη Πρόσβαση στο Ιστορικό Πληρωμών',
    'tenant.feature4': 'Άμεσες Ειδοποιήσεις για Χρεώσεις & Πληρωμές',
    'tenant.feature5': 'Δυνατότητα Λήψης Αποδείξεων',
    'tenant.feature6': 'Συμμετοχή στη Ροή Κτιρίου',
    
    // Final CTA Section
    'finalCta.title': 'Έτοιμοι να Απλοποιήσετε τα Οικονομικά της Πολυκατοικίας σας;',
    'finalCta.subtitle': 'Γίνετε μέλος εκατοντάδων πολυκατοικιών που διαχειρίζονται τα κοινόχρηστά τους με έξυπνο τρόπο. Εγγραφείτε δωρεάν σήμερα!',
    'finalCta.button': 'Δωρεάν Εγγραφή Τώρα',
    
    // Footer
    'footer.privacy': 'Πολιτική Απορρήτου',
    'footer.terms': 'Όροι Χρήσης',
    'footer.contact': 'Επικοινωνία',
    'footer.copyright': ' 2025 OikosPay. Με επιφύλαξη παντός δικαιώματος.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
