type Lang = 'en' | 'no'

type LandingPageDictionary = {
    title: string
    description: string
    experience: string
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
    menu: string
    links: {
        about: {
            title: string
            navigation: string
        }
        projects: {
            title: string
            navigation: string
        }
        skills: {
            title: string
            navigation: string
        }
    }
}

type FooterDictionary = {
    copyright: string
}