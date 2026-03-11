"use client";

import Link from "next/link";
import { User, Pencil, Trash2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProfileSidebar() {

  return (
    <aside className="w-64 border-r p-6">

      <h2 className="text-lg font-semibold mb-6">
        Profile
      </h2>

      <nav className="flex flex-col gap-4">

        <Link
          href="/profile/info"
          className="flex items-center gap-2 hover:text-primary"
        >
          <User size={18} />
          My Info
        </Link>

        <Link
          href="/profile/update"
          className="flex items-center gap-2 hover:text-primary"
        >
          <Pencil size={18} />
          Update Data
        </Link>

        <Dialog>

          <DialogTrigger asChild>
            <button className="flex items-center gap-2 hover:text-red-700 text-red-500 cursor-pointer">
              <Trash2 size={18} />
              Delete Account
            </button>
          </DialogTrigger>

          <DialogContent>

            <DialogHeader>
              <DialogTitle>Delete Account</DialogTitle>

              <DialogDescription>
                This action is permanent. All your financial data will be removed and cannot be recovered.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>

              <button className="px-4 py-2 border rounded-md">
                Cancel
              </button>

              <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                Delete
              </button>

            </DialogFooter>

          </DialogContent>

        </Dialog>

      </nav>

    </aside>
  );
}