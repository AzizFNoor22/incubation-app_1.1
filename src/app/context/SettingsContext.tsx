import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface UserProfile {
  fullName: string;
  email: string;
  role: string;
  phone: string;
}

interface NotificationSettings {
  emailNotifications: boolean;
  participantUpdates: boolean;
  financingApplications: boolean;
  weeklySummary: boolean;
  systemAlerts: boolean;
}

interface ProgramSettings {
  programName: string;
  currentBatch: string;
  programDuration: number;
  atRiskThreshold: number;
}

interface PrivacySettings {
  activityTracking: boolean;
  dataSharing: boolean;
}

interface AppearanceSettings {
  theme: 'light' | 'dark' | 'auto';
  sidebarDisplay: 'visible' | 'auto-hide' | 'collapsed';
  density: 'comfortable' | 'compact' | 'spacious';
}

interface RegionSettings {
  language: string;
  timezone: string;
  dateFormat: string;
}

interface SettingsContextType {
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
  notifications: NotificationSettings;
  updateNotifications: (notifications: Partial<NotificationSettings>) => void;
  program: ProgramSettings;
  updateProgram: (program: Partial<ProgramSettings>) => void;
  privacy: PrivacySettings;
  updatePrivacy: (privacy: Partial<PrivacySettings>) => void;
  appearance: AppearanceSettings;
  updateAppearance: (appearance: Partial<AppearanceSettings>) => void;
  region: RegionSettings;
  updateRegion: (region: Partial<RegionSettings>) => void;
  resetSettings: () => void;
}

const defaultSettings = {
  profile: {
    fullName: 'Coach Asdwin',
    email: 'coach.asdwin@awqafbiz.id',
    role: 'Program Manager',
    phone: '+62 812-3456-7890',
  },
  notifications: {
    emailNotifications: true,
    participantUpdates: true,
    financingApplications: true,
    weeklySummary: true,
    systemAlerts: true,
  },
  program: {
    programName: 'Awqaf Biz Incubator - IPO Program',
    currentBatch: 'Batch 01',
    programDuration: 24,
    atRiskThreshold: 50,
  },
  privacy: {
    activityTracking: true,
    dataSharing: false,
  },
  appearance: {
    theme: 'light' as const,
    sidebarDisplay: 'visible' as const,
    density: 'comfortable' as const,
  },
  region: {
    language: 'Bahasa Indonesia',
    timezone: 'Asia/Jakarta (WIB)',
    dateFormat: 'DD/MM/YYYY',
  },
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(defaultSettings.profile);
  const [notifications, setNotifications] = useState<NotificationSettings>(defaultSettings.notifications);
  const [program, setProgram] = useState<ProgramSettings>(defaultSettings.program);
  const [privacy, setPrivacy] = useState<PrivacySettings>(defaultSettings.privacy);
  const [appearance, setAppearance] = useState<AppearanceSettings>(defaultSettings.appearance);
  const [region, setRegion] = useState<RegionSettings>(defaultSettings.region);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.notifications) setNotifications(parsed.notifications);
        if (parsed.program) setProgram(parsed.program);
        if (parsed.privacy) setPrivacy(parsed.privacy);
        if (parsed.appearance) setAppearance(parsed.appearance);
        if (parsed.region) setRegion(parsed.region);
      } catch (e) {
        console.error('Failed to load settings:', e);
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    const settings = {
      profile,
      notifications,
      program,
      privacy,
      appearance,
      region,
    };
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }, [profile, notifications, program, privacy, appearance, region]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    if (appearance.theme === 'dark') {
      root.classList.add('dark');
    } else if (appearance.theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } else {
      root.classList.remove('dark');
    }
  }, [appearance.theme]);

  const updateProfile = (newProfile: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...newProfile }));
  };

  const updateNotifications = (newNotifications: Partial<NotificationSettings>) => {
    setNotifications((prev) => ({ ...prev, ...newNotifications }));
  };

  const updateProgram = (newProgram: Partial<ProgramSettings>) => {
    setProgram((prev) => ({ ...prev, ...newProgram }));
  };

  const updatePrivacy = (newPrivacy: Partial<PrivacySettings>) => {
    setPrivacy((prev) => ({ ...prev, ...newPrivacy }));
  };

  const updateAppearance = (newAppearance: Partial<AppearanceSettings>) => {
    setAppearance((prev) => ({ ...prev, ...newAppearance }));
  };

  const updateRegion = (newRegion: Partial<RegionSettings>) => {
    setRegion((prev) => ({ ...prev, ...newRegion }));
  };

  const resetSettings = () => {
    setProfile(defaultSettings.profile);
    setNotifications(defaultSettings.notifications);
    setProgram(defaultSettings.program);
    setPrivacy(defaultSettings.privacy);
    setAppearance(defaultSettings.appearance);
    setRegion(defaultSettings.region);
    localStorage.removeItem('appSettings');
  };

  return (
    <SettingsContext.Provider
      value={{
        profile,
        updateProfile,
        notifications,
        updateNotifications,
        program,
        updateProgram,
        privacy,
        updatePrivacy,
        appearance,
        updateAppearance,
        region,
        updateRegion,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
