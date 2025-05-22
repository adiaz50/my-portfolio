const allReports = [
  {
    title: "HTB-Jet",
    difficulty: "Medium",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Jet",
    difficulty: "Medium",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Nibbles",
    difficulty: "Easy",
    summary: "Default creds and local file editor exploit.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "THM-Overpass",
    difficulty: "Hard",
    summary: "Custom credential cracking + sudo abuse.",
    source: "HACK THE BOX",
    full: `
## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },

  {
    title: "THM-Overpass",
    difficulty: "Insane",
    summary: "Custom credential cracking + sudo abuse.",
    source: "HACK THE BOX",
    full: `

__Red Team Penetration Test Report__

__Target Machine:__ [Machine Name] __Date:__ [MM/DD/YYYY] __Tester:__ [Your Name]


---


### __1. Executive Summary__


#### __Overview__

This report provides an assessment of the security vulnerabilities identified on the target machine as part of an OffSec-style penetration test. The goal was to exploit vulnerabilities systematically, gain administrative control, and document the attack path.


#### __Key Findings__



* __Critical Vulnerability:__ Privilege escalation via misconfigured services.
* __Medium Risk:__ Weak credentials allowing SSH access.
* __Low Risk:__ Lack of logging or monitoring on critical system processes.


#### __Overall Risk Rating: High__

The target machine is vulnerable to unauthorized access and privilege escalation.


### __2. Scope and Methodology__


#### __Scope__



* __Target Machine:__ [Machine IP / Hostname]
* __Allowed Techniques:__ Exploitation, privilege escalation, post-exploitation.
* __Restricted Actions:__ No service disruption, no external brute force attacks.


#### __Testing Phases__



1. __Reconnaissance:__ Enumeration of open ports, services, and vulnerabilities using 'nmap', 'Gobuster', and 'enum4linux'.
2. __Initial Access:__ Exploiting web vulnerabilities, misconfigured services, or weak credentials.
3. __Privilege Escalation:__ Identifying and exploiting kernel vulnerabilities, misconfigured sudo privileges, or credential harvesting.
4. __Post-Exploitation:__ Gaining persistence and identifying sensitive files.
5. __Report Findings:__ Documenting vulnerabilities and remediation steps.


### __3. Findings and Exploits__


#### __Critical Findings__


##### __1. Privilege Escalation via Misconfigured Sudo Permissions__



* __Impact:__ Allowed a low-privilege user to execute commands as root.
* __Exploitation:__
![Initial Foothold](/reports/test.png)
    * Used 'sudo -l' to identify misconfigurations.
    * Exploited a script with write permissions to escalate privileges.
* __Remediation:__ Restrict sudo privileges and review executable scripts.


##### __2. SSH Access via Weak Credentials__



* __Impact:__ Enabled unauthorized access to the machine.
* __Exploitation:__
    * Default or weak passwords discovered via brute force ('hydra' or 'medusa').
    * Direct SSH access obtained as a low-privileged user.
* __Remediation:__ Enforce strong password policies and disable SSH root login.


#### __Medium and Low Findings__



* __Exposed Services:__ Open SMB shares leaking sensitive files.
* __No System Monitoring:__ Lack of 'auditd' or logging for suspicious activity.
* __Unpatched Vulnerabilities:__ Outdated kernel susceptible to privilege escalation.


### __4. Recommendations__



1. __Enforce Strong Authentication:__ Implement MFA and secure passwords.
2. __Harden SSH Configuration:__ Disable password authentication and use key-based authentication.
3. __Regular Patch Management:__ Apply security updates and restrict access to outdated services.
4. __Enable Logging and Monitoring:__ Deploy security event logging with 'auditd' or SIEM tools.


### __5. Conclusion__

This assessment revealed multiple security gaps in the target machine that could allow attackers to gain full control. By implementing the recommended mitigations, system security can be significantly improved.

__Prepared by:__ [Your Name] [Your Contact Information]


    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Jet",
    difficulty: "Medium",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "OFFSEC",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Jet",
    difficulty: "Insane",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Jet",
    difficulty: "Hard",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Jet",
    difficulty: "Medium",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Jet",
    difficulty: "Easy",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  {
    title: "HTB-Jet",
    difficulty: "Hard",
    summary: "RCE via upload + sudo privesc with cp.",
    source: "HACK THE BOX",
    full: `
# HTB Jet

## Initial Access
Discovered \`/uploads\` via \`gobuster\`. Uploaded PHP reverse shell.

## Privilege Escalation
Used \`sudo cp\` technique from GTFOBins.

> Root achieved.
    `,
    filename: 'test.pdf'
  },
  
  // Add more...
];

export default allReports;
