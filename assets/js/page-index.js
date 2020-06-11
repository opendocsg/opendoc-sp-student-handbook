(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "CodeofConduct.md",
                title: "Code of Conduct",
                url: "/opendoc-sp-student-handbook/CodeofConduct.html",
                escapedPath: "CodeofConduct.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "CompResources.md",
                title: "Policies Concerning The Use of Computer Resources",
                url: "/opendoc-sp-student-handbook/CompResources.html",
                escapedPath: "CompResources.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "ContactUs.md",
                title: "Contact Us",
                url: "/opendoc-sp-student-handbook/ContactUs.html",
                escapedPath: "ContactUs.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "DNCPDPA.md",
                title: "DNC PDPA ACT",
                url: "/opendoc-sp-student-handbook/DNCPDPA.html",
                escapedPath: "DNCPDPA.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "Disciplinary.md",
                title: "Disciplinary Rules And Regulations",
                url: "/opendoc-sp-student-handbook/Disciplinary.html",
                escapedPath: "Disciplinary.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "Documentinformation.md",
                title: "DOCUMENT INFORMATION",
                url: "/opendoc-sp-student-handbook/Documentinformation.html",
                escapedPath: "Documentinformation.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "IPCopyrightPlagiarism.md",
                title: "Intellectual Property, Copyright and Plagiarism",
                url: "/opendoc-sp-student-handbook/IPCopyrightPlagiarism.html",
                escapedPath: "IPCopyrightPlagiarism.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "MessageDir.md",
                title: "Message From The Director",
                url: "/opendoc-sp-student-handbook/MessageDir.html",
                escapedPath: "MessageDir.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "NavigationAroundSP.md",
                title: "Navigating around Singapore Polytechnic",
                url: "/opendoc-sp-student-handbook/NavigationAroundSP.html",
                escapedPath: "NavigationAroundSP.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "README.md",
                title: "How to create a new Opendoc",
                url: "/opendoc-sp-student-handbook/readme",
                escapedPath: "README.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "SocialMedia.md",
                title: "Social Media Guidelines",
                url: "/opendoc-sp-student-handbook/SocialMedia.html",
                escapedPath: "SocialMedia.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "index.md",
                title: "DOCUMENT INFORMATION",
                url: "/opendoc-sp-student-handbook/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        
        
        {
                name: "AboutPACE.md",
                title: "About PACE",
                url: "/opendoc-sp-student-handbook/AboutPACE.html",
                escapedPath: "AboutPACE.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "GenCourseMatters.md",
                title: "General Course Matters",
                url: "/opendoc-sp-student-handbook/GenCourseMatters.html",
                escapedPath: "GenCourseMatters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "GenStudentMatters.md",
                title: "General Student Matters",
                url: "/opendoc-sp-student-handbook/GenStudentMatters.html",
                escapedPath: "GenStudentMatters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        {
                name: "SemestralExam.md",
                title: "Semestral Examinations",
                url: "/opendoc-sp-student-handbook/SemestralExam.html",
                escapedPath: "SemestralExam.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Student Handbook","",["Documentinformation.md","MessageDir.md","AboutPACE.md","ContactUs.md","NavigationAroundSP.md","GenStudentMatters.md","GenCourseMatters.md","SemestralExam.md","CodeofConduct.md","Disciplinary.md","DNCPDPA.md","CompResources.md","SocialMedia.md","IPCopyrightPlagiarism.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()