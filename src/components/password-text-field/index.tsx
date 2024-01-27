import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import TextField from '../text-field';

interface IProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
}

const PasswordTextField: React.FC<IProps> = ({ name, label,value,onChange }) => {
  const [passwordVisibleSwitch, setPasswordVisibleSwitch] =
    React.useState(false);
  return (
    <div className="relative">
      <TextField
      value={value}
      onChange={onChange}
        label={label ? label : 'Password'}
        name={name}
        placeholder="Enter a password"
        type={`${!passwordVisibleSwitch ? 'password' : 'text'}`}
      />
      {!passwordVisibleSwitch ? (
        <AiOutlineEye
          className="absolute top-9 right-4 cursor-pointer"
          color="#002a32"
          onClick={() => setPasswordVisibleSwitch(!passwordVisibleSwitch)}
        />
      ) : (
        <AiOutlineEyeInvisible
          className="absolute top-9 right-4 cursor-pointer"
          color="#002a32"
          onClick={() => setPasswordVisibleSwitch(!passwordVisibleSwitch)}
        />
      )}
    </div>
  );
};

export default React.memo(PasswordTextField);
