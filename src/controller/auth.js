// auth.js
import { compare, hash } from 'bcrypt';
import db from '../models/index.js';
import { randomBytes } from 'crypto';



export const login = async (req, res) => {
  const { email, password } = req.body || {};

  try {
    const user = await db.Admin.findOne({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const match = await compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Error during login' });
  }
};

// Function to handle user registration


export const registration = async (req, res) => {
  try {
    const { email, password, name, phone, bio, profile, address, linkedin } = req.body;


    // Generate admin_id
    const adminId = randomBytes(20).toString('hex');


    // Validate required fields
    if (!email || !phone || !password || !name) {
      console.error('Validation failed - missing fields:', { email, password, name, phone });
      return res.status(400).json({
        error: 'Email, phone, password, and name are required',
        received: { email, phone, password, name }
      });
    }

    // Check for existing user
    const exUser = await db.Admin.findOne({
      where: { email }
    });

    if (exUser) {
      console.log('This Credential Already Exist');
      return res.status(409).json({
        error: "This user already exists in our database",
        message: 'Already exists. Please contact the admin.'
      });
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create new user
    const newUser = await db.Admin.create({
      adminId,
      email,
      password: hashedPassword,
      displayName: name,
      phone,
      bio,
      profilePicture: profile,
      address,
      linkedinProfile: linkedin
    });

    console.log('User successfully registered:', newUser.email);

    return res.status(201).json({
      message: 'Registration successful',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        phone: newUser.phone
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      error: 'An error occurred during registration'
    });
  }
};



export const updateAdmin = async (req, res) => {
  const { email, updateEmail, name, phone, bio, profile, address, linkedin } = req.body;

  try {
    const exUser = await db.Admin.findOne({ where: { email } });

    if (!exUser) {
      return res.status(404).json({
        error: "User not found",
        message: 'No admin found with this email.'
      });
    }

    await exUser.update({
      email: updateEmail || exUser.email,
      displayName: name || exUser.displayName,
      phone,
      bio,
      profilePicture: profile,
      address,
      linkedinProfile: linkedin
    });

    return res.status(200).json({
      message: 'Admin profile updated successfully',
      admin: exUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


