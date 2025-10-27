@echo off
echo.
echo ========================================
echo   ConvoyLife Blog - Starting Server
echo ========================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting development server...
echo The site will open in your browser at http://localhost:3000
echo.
call npm run dev

