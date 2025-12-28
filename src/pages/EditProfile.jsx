import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, MapPin, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function EditProfile() {
  const [form, setForm] = useState({
    name: "Rahul Kumar",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    address: "123, Model Town, Ludhiana, Punjab",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-10">Edit Profile</h1>

      <Card className="max-w-3xl mx-auto shadow-md">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-pink-500 shadow-md"
              />
              <Button
                variant="outline"
                className="mt-3 text-sm font-medium hover:bg-pink-100"
              >
                Change Photo
              </Button>
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-600" /> Full Name
              </Label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" /> Email Address
              </Label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-600" /> Phone Number
              </Label>
              <Input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" /> Address
              </Label>
              <Input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="mt-1"
              />
            </div>

            <div className="flex justify-between gap-4">
             <Link to="/profile"> <Button
                type="button"
                variant="outline"
                className="w-full hover:bg-gray-100"
              >
                Cancel
              </Button></Link>
              <Link to="/profile"><Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold"
              >
                Save Changes
              </Button></Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
