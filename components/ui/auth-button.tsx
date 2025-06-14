"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { User } from 'lucide-react';
import LoginRegister from '@/components/ui/login-register';

export default function AuthButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-fit">
          <User className="w-4 h-4 mr-1" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
        <LoginRegister />
      </DialogContent>
    </Dialog>
  );
}
