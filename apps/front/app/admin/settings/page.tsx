"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Save } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1000)
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>
      <p className="text-muted-foreground mb-8">
        Configure system settings, email templates, and notification preferences.
      </p>

      {showSuccess && (
        <Alert className="mb-6 bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800">
          <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertTitle className="text-green-600 dark:text-green-400">Success</AlertTitle>
          <AlertDescription className="text-green-600 dark:text-green-400">
            Your settings have been saved successfully.
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="email">Email Templates</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic settings for your web app builder portal.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="PushButtonBuild.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  defaultValue="Turn your expertise into a digital reality with our web app builder portal."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="support@pushbuttonbuild.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Default Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time (ET)</SelectItem>
                    <SelectItem value="cst">Central Time (CT)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                    <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Put the site in maintenance mode</p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Customize email templates sent to users.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="welcome-email">Welcome Email</Label>
                <Textarea
                  id="welcome-email"
                  defaultValue="Welcome to PushButtonBuild.com! We're excited to help you turn your expertise into a digital reality. Here's how to get started..."
                  rows={5}
                />
                <p className="text-xs text-muted-foreground">
                  Available variables: {"{name}"}, {"{email}"}, {"{login_link}"}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="consultation-confirmation">Consultation Confirmation</Label>
                <Textarea
                  id="consultation-confirmation"
                  defaultValue="Your consultation has been scheduled for {date} at {time}. We look forward to discussing your project!"
                  rows={5}
                />
                <p className="text-xs text-muted-foreground">
                  Available variables: {"{name}"}, {"{email}"}, {"{date}"}, {"{time}"}, {"{zoom_link}"}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="form-submission">Form Submission Notification</Label>
                <Textarea
                  id="form-submission"
                  defaultValue="A new form has been submitted on PushButtonBuild.com. Log in to your admin dashboard to view the details."
                  rows={5}
                />
                <p className="text-xs text-muted-foreground">
                  Available variables: {"{form_type}"}, {"{submission_date}"}, {"{user_name}"}, {"{user_email}"}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure when and how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New User Registration</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications when a new user registers</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Form Submission</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for new form submissions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Payment</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for new payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Failed Payment</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for failed payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" type="email" defaultValue="admin@pushbuttonbuild.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Integration Settings</CardTitle>
              <CardDescription>Configure third-party service integrations.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="stripe-key">Stripe API Key</Label>
                <Input id="stripe-key" type="password" defaultValue="sk_test_..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stripe-webhook">Stripe Webhook Secret</Label>
                <Input id="stripe-webhook" type="password" defaultValue="whsec_..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="google-analytics">Google Analytics ID</Label>
                <Input id="google-analytics" defaultValue="G-XXXXXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resend-api">Resend API Key</Label>
                <Input id="resend-api" type="password" defaultValue="re_xxxxxxxxxx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resend-from">Default From Email</Label>
                <Input id="resend-from" defaultValue="hello@pushbuttonbuild.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resend-domain">Verified Domain</Label>
                <Input id="resend-domain" defaultValue="pushbuttonbuild.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSave} disabled={isSaving}>
                {isSaving ? (
                  <>Saving...</>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
