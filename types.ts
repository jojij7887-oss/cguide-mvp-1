export interface User {
  id: string;
  name: string;
  email: string;
  role: 'STUDENT';
  profilePhotoUrl?: string;
  favoriteCollegeIds: string[];
  applications: Application[];
  notifications: Notification[];
}

export interface Application {
    id: string;
    collegeId: string;
    collegeName: string;
    course: string;
    status: 'Submitted' | 'Under Review' | 'Accepted' | 'Rejected';
    submittedDate: string;
}

export interface Notification {
    id: string;
    message: string;
    read: boolean;
    link?: string;
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  fees: string;
  description: string;
}

export interface CollegeEvent {
  id: string;
  imageUrl: string;
  videoUrl?: string;
  title: string;
}

export interface College {
  id: string;
  name: string;
  location: string;
  photoUrl: string;
  logoUrl: string;
  description: string;
  shortDescription: string;
  courses: Course[];
  admissionOpenDate: string;
  admissionCloseDate: string;
  events: CollegeEvent[];
}

export interface LoanProvider {
    id: string;
    name: string;
    interestRate: string;
    terms: string;
    logoUrl: string;
    applyLink: string;
}