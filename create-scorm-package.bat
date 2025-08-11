@echo off
echo Creating SCORM package...

REM Create temporary directory
mkdir scorm-package 2>nul

REM Copy files to package directory
copy index.html scorm-package\
copy imsmanifest.xml scorm-package\
xcopy src scorm-package\src\ /E /I
xcopy content scorm-package\content\ /E /I

REM Create ZIP file (requires PowerShell)
powershell -command "Compress-Archive -Path 'scorm-package\*' -DestinationPath 'quest-of-the-sky-scorm.zip' -Force"

REM Clean up
rmdir /s /q scorm-package

echo SCORM package created: quest-of-the-sky-scorm.zip
echo Ready to upload to your LMS!
pause