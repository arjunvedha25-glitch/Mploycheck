import { Request, Response } from 'express';import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

const xmlFilePath = path.resolve(process.cwd(), 'src/data/database.xml');
// 
const readXmlData = async (): Promise<any[]> => {
  const fileContent = fs.readFileSync(xmlFilePath, 'utf-8');
  const parser = new xml2js.Parser({ explicitArray: false });
  const result = await parser.parseStringPromise(fileContent);
  const users = result.users.user;
  return Array.isArray(users) ? users : [users];
};

// 
const writeXmlData = async (usersArray: any[]): Promise<void> => {
  const builder = new xml2js.Builder({ rootName: 'users', renderOpts: { pretty: true, indent: '    ', newline: '\n' } });
  // 
  const xmlObject = { user: usersArray };
  const xmlContent = builder.buildObject(xmlObject);
  fs.writeFileSync(xmlFilePath, xmlContent, 'utf-8');
};

export const loginUser = async (req: Request, res: Response) => {
  const { userId, password, role } = req.body;
  try {
    const users = await readXmlData();
    const match = users.find(u => u.id === userId && u.password === password && u.role === role);

    if (match) {
      return res.status(200).json({
        message: 'Login successful',
        user: { id: match.id, name: match.name, role: match.role, accessLevel: match.accessLevel }
      });
    }
    return res.status(401).json({ message: 'Invalid ID, Password, or Role match' });
  } catch (err) {
    return res.status(500).json({ message: 'XML Read Error' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const delay = req.query.delay ? parseInt(req.query.delay as string, 10) : 0;
    const users = await readXmlData();
    
    // 
    const sanitizedUsers = users.map(({ password, ...rest }) => rest);

    // 
    setTimeout(() => {
      res.status(200).json(sanitizedUsers);
    }, delay);
  } catch (err) {
    res.status(500).json({ message: 'XML Fetch Error' });
  }
};

export const createNewUser = async (req: Request, res: Response) => {
  const { requesterRole, newUser } = req.body;
  
  if (requesterRole !== 'Admin') {
    return res.status(403).json({ message: 'Access Denied: Admin role required.' });
  }

  try {
    const users = await readXmlData();
    users.push({
      id: newUser.id,
      password: 'default123', // 
      name: newUser.name,
      role: newUser.role,
      accessLevel: newUser.accessLevel
    });

    await writeXmlData(users);
    return res.status(201).json({ message: 'User added to XML successfully.' });
  } catch (err) {
    return res.status(500).json({ message: 'XML Write Error' });
  }
};