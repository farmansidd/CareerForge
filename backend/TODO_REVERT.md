# Revert to Local PostgreSQL

## Steps to Reverse Supabase Conversion

1. **Update DATABASE_URL in .env**:
   - Open `backend/.env`
   - Change the DATABASE_URL to your local PostgreSQL URL.
   - Example: `DATABASE_URL=postgresql://postgres:yourpassword@localhost/careerforge`
   - Replace `yourpassword` with your actual PostgreSQL password.
   - Replace `careerforge` with your desired database name if different.

2. **Ensure Local PostgreSQL is Running**:
   - Make sure PostgreSQL is installed and running on your local machine.
   - Create the database if it doesn't exist: `createdb careerforge` (or your chosen name).

3. **Apply Database Migrations**:
   - Run `cd backend && alembic upgrade head` to apply migrations to the local database.

4. **Install/Update Dependencies**:
   - Run `pip install -r requirements.txt` to ensure all dependencies are up to date.

5. **Test the Application**:
   - Start the backend server and verify it connects to the local database without errors.

## Notes
- Supabase package was not found in requirements.txt, so no removal needed.
- No Supabase-specific code was detected in the codebase.
- If you encounter any errors, check PostgreSQL logs and ensure the database credentials are correct.
