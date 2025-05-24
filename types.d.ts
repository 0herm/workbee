type Lang = 'en' | 'no'

type LandingPageDictionary = {
    title: string
    description: string
    education: {
        title: string
        degrees: {
            [key: string]: {
                title: string
                degree: string
                period: string
            }
        }
    }
    work: {
        title: string
        jobs: {
            [key: string]: {
                position: string
                company: string
                period: string
            }
        }
    }
    projects: {
        title: string
        viewProject: string
        viewMore: string
        projects: {
            [key: string]: {
                name: string
                description: string
                link?: string
            }
        }
    }
    contributions: {
        title: string
        viewProject: string
        viewMore: string
        contributions: {
            [key: string]: {
                name: string
                description: string
                link?: string
            }
        }
    }
}

type NavBarDictionary = {
    about: string
    projects: string
    skills: string
}

type FooterDictionary = {
    copyright: string
}